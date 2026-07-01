import { useBusqueda } from "../../context/BusquedaContext";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "./BarraBusqueda.module.css";

const BarraBusqueda = () => {
  const { busqueda, setBusqueda } = useBusqueda();
  const navigate = useNavigate();

  const manejarBusqueda = (e) => {
    const valor = e.target.value;

    setBusqueda(valor);

    if (valor.trim()) {
      navigate("/busqueda");
    }
  };

  return (
    <form
      className={styles.formContainer}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles.searchBox}>

        <FaSearch className={styles.icon} />

        <input
          type="search"
          placeholder="Buscar notebooks, mouse, teclados..."
          value={busqueda}
          onChange={manejarBusqueda}
          className={styles.input}
        />

      </div>
    </form>
  );
};

export default BarraBusqueda;