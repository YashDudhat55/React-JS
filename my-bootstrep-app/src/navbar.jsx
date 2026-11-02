
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid px-4 px-lg-5">

        {/* Brand */}
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#"
        >

          <span className="d-flex flex-column">
            <span className="fw-bold text-dark">
              Everlight Homes
            </span>
          </span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#properties">
                Properties
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>

          {/* Right Side Actions */}
          <div className="d-flex align-items-center gap-3">


            <a
              href="#get-started"
              className="btn btn-dark btn-sm rounded-pill px-3 py-2"
            >
              Get Started →
            </a>

          </div>
        </div>

      </div>
    </nav>
  );
}
