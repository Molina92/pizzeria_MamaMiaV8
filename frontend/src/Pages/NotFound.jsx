import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div className="container p-5 my-5">
        <div className="text-light p-3 my-5">
          <h1>Página no encontrada</h1>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <Link to="/" className="btn btn-primary my-5">Volver al inicio</Link>
        </div>
      </div>
    </>
  );
};
