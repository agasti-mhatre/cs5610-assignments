import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">

        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/react.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/dart.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1000 Dart
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Dart software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/flutter.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2000 Flutter
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Flutter software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/java.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3000 Java
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Java software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/python.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4000 Python
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Python software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/spring.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5000 Spring
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Spring software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/sql.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5000 SQL
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      SQL software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}