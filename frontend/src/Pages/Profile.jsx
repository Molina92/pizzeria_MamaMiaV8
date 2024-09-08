import "./Profile.css";

export const Profile = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-md-7">
            <div className="card p-3 py-4 text-center user-card">
              <img
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                width="100"
                className="rounded-circle user-img"
                alt="Profile"
              />
              <h5 className="mt-4 mb-0">Alejandro Ramirez</h5>
              <span className="text-muted">
                Correo: alejandroramirez@email.com
              </span>
              <div className="px-4 mt-1">
                <p className="fonts">Miembro desde: 15/07/2019</p>
              </div>
              <button className="btn btn-outline-primary px-4">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
