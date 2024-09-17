import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      
      <div id="wd-dashboard-courses">
        
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/react.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1000/Home">
            <img src="/images/dart.jpg" width={200} />
            <div>
              <h5>
                 CS1000 Dart
              </h5>
              <p className="wd-dashboard-course-title">
                Dart software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/2000/Home">
            <img src="/images/flutter.jpg" width={200} />
            <div>
              <h5>
                 CS2000 Flutter
              </h5>
              <p className="wd-dashboard-course-title">
                Flutter software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/3000/Home">
            <img src="/images/java.jpg" width={200} />
            <div>
              <h5>
                 CS3000 Java
              </h5>
              <p className="wd-dashboard-course-title">
                Java software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4000/Home">
            <img src="/images/python.jpg" width={200} />
            <div>
              <h5>
                 CS4000 Python
              </h5>
              <p className="wd-dashboard-course-title">
                Python software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/spring.jpg" width={200} />
            <div>
              <h5>
                 CS5000 Spring Boot
              </h5>
              <p className="wd-dashboard-course-title">
                Spring Boot software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/sql.jpg" width={200} />
            <div>
              <h5>
                 CS6000 SQL
              </h5>
              <p className="wd-dashboard-course-title">
                SQL software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}