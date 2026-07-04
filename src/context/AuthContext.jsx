import { createContext, useState, useContext, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config"; 
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

//1 Crear el contexto
export const AuthContext = createContext();

//Hook personalizado
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
// 2 Crear el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(); //Obtenemos la instancia de auth una sola vez

  //Funcion para registrar un nuevo usuario
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
 //Funcion para iniciar sesión 
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
//Funcion para cerrar sesión
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    //onAuthStateChanged es el observador de Firebase
    const cancerlarEscucha = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          // Si hay un usuario autenticado, busca su documento en la coleccion cliente usando su UID
          const userDocRef = doc(db, "cliente", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            const datosUsuario = userDocSnap.data();
            console.log("datosUsuario =", datosUsuario);
console.log("datosUsuario.rol =", datosUsuario.rol);
console.log("datosUsuario.user =", datosUsuario.user);
            // Pasamos los datos completos de Firestore (incluyendo el nombre) al estado user
            if (datosUsuario.rol === "admin") {
              setUser({ ...currentUser, nombre: datosUsuario.nombre, rol: "admin" });
            } else {
              //Para cualquier otro caso, es un usuario regular
              setUser({ ...currentUser, nombre: datosUsuario.nombre, rol: "user" }); 
            }

          } else {
            setUser({ ...currentUser, nombre: "Invitado", rol: "user" });
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error al obtener el rol del usuario:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => cancerlarEscucha();
  }, [auth]); 

  const informacion = { user, loading, signup, login, logout };

  return (
    <AuthContext.Provider value={informacion}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

