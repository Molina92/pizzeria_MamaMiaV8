import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import "./Profile.css";

export const Profile = () => {
  const { userData, logout } = useContext(UserContext);

  return (
    <>
      <div className="container my-5 p-5 ">
        <div className="row d-flex justify-content-center align-items-center mb-5">
          <div className="col-md-7">
            <div className="card p-3 text-center user-card">
              <div className="container">
                <h2 className="text-muted p-3">
                  Correo: {userData?.email || "Correo no disponible"}
                </h2>

                <button
                  className="btn btn-outline-primary btn-lg m-3"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
