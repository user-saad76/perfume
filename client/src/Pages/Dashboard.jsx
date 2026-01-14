import { useAuth } from "../Contexts/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow-sm border-0">
            <div className="card-body text-center">

              <i className="bi bi-person-circle display-1 mb-3"></i>
              <h3 className="fw-bold mb-4">User Dashboard</h3>

              <ul className="list-group text-start">
                <li className="list-group-item">
                  <strong>Name:</strong> {user?.name}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {user?.email}
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> {user?.phone || "N/A"}
                </li>
                <li className="list-group-item">
                  <strong>Role:</strong>{" "}
                  <span className="badge bg-primary">{user?.role}</span>
                </li>
              </ul>

              {/* ✅ Added button */}
            <button className="btn btn-outline-secondary mt-4">
           <i className="bi bi-gear me-2"></i>
            Settings
           </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
