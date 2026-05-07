const Card = ({ nombre, rol }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '8px',
      width: '150px'
    }}>
      <h4>{nombre}</h4>
      <p>{rol}</p>
    </div>
  );
};

export default Card;