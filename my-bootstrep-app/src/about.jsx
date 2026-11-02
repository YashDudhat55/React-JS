
export default function About() {
  return (
    <section className="container py-4">
      <div className="row align-items-center g-4">

        {/* Left Side Image */}
        <div className="col-12 col-lg-6">
          <img
            src="./src/Images/hero3.png"
            alt="Modern luxury living room"
            className="img-fluid rounded-3 w-100"
          />
        </div>

        {/* Right Side Content */}
        <div className="col-12 col-lg-6">

          <p className="text-uppercase text-secondary fw-bold small mb-2">
            Why Choose Everlight
          </p>

          <h2 className="h3 fw-bold text-dark mb-2">
            More Than Properties.
            <br />
            We Build Futures.
          </h2>

          <p className="text-secondary small mb-4">
            Whether you're buying, selling or renting, we make the
            process simple, transparent and stress-free. Your dream
            home is closer than you think.
          </p>

          {/* Statistics */}
          <div className="row g-3">

            <div className="col-6 col-md-3">
              <h3 className="h5 fw-bold mb-1">12K+</h3>
              <p className="small text-secondary mb-0">
                Happy Clients
              </p>
            </div>

            <div className="col-6 col-md-3">
              <h3 className="h5 fw-bold mb-1">500+</h3>
              <p className="small text-secondary mb-0">
                Properties Listed
              </p>
            </div>

            <div className="col-6 col-md-3">
              <h3 className="h5 fw-bold mb-1">25+</h3>
              <p className="small text-secondary mb-0">
                Cities
              </p>
            </div>

            <div className="col-6 col-md-3">
              <h3 className="h5 fw-bold mb-1">98%</h3>
              <p className="small text-secondary mb-0">
                Success Rate
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
