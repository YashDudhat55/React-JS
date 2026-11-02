
export default function Properties() {
  return (
    <section className="container py-5">

      {/* Section Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p className="text-uppercase text-secondary small fw-bold mb-1">
            Featured Properties
          </p>
          <h2 className="h3 fw-bold mb-0">
            Handpicked Homes for You
          </h2>
        </div>

        <a href="#properties" className="text-decoration-none text-dark small fw-semibold">
          View All Properties →
        </a>
      </div>

      {/* Property Cards */}
      <div className="row g-4">

        {/* Property 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 border rounded-3 overflow-hidden">

            <div className="position-relative">
              <img
                src="./src/Images/hero1.png"
                className="card-img-top"
                alt="The Azure Villa"
              />

              <span className="badge bg-dark position-absolute top-0 start-0 m-3 rounded-pill">
                For Sale
              </span>

            </div>

            <div className="card-body">
              <h6 className="fw-bold mb-1">The Azure Villa</h6>

              <p className="small text-secondary mb-3">
                📍 Goa, India
              </p>

              <div className="d-flex justify-content-between flex-wrap gap-2 small text-secondary mb-3">
                <span> 4 Beds</span>
                <span> 4 Baths</span>
                <span> 3,500 sq ft</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0">₹ 4.25 Cr</h5>
                <a href="#azure-villa" className="text-dark text-decoration-none">
                  →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Property 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 border rounded-3 overflow-hidden">

            <div className="position-relative">
              <img
                src="./src/Images/hero2.png"
                className="card-img-top"
                alt="Skyline Residences"
              />

              <span className="badge bg-dark position-absolute top-0 start-0 m-3 rounded-pill">
                For Sale
              </span>

            </div>

            <div className="card-body">
              <h6 className="fw-bold mb-1">Skyline Residences</h6>

              <p className="small text-secondary mb-3">
                📍 Bengaluru, Karnataka
              </p>

              <div className="d-flex justify-content-between flex-wrap gap-2 small text-secondary mb-3">
                <span> 3 Beds</span>
                <span> 3 Baths</span>
                <span> 1,800 sq ft</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0">₹ 1.85 Cr</h5>
                <a href="#skyline-residences" className="text-dark text-decoration-none">
                  →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Property 3 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 border rounded-3 overflow-hidden">

            <div className="position-relative">
              <img
                src="./src/Images/hero3.png"
                className="card-img-top"
                alt="Serene Bungalow"
              />

              <span className="badge bg-dark position-absolute top-0 start-0 m-3 rounded-pill">
                For Rent
              </span>


            </div>

            <div className="card-body">
              <h6 className="fw-bold mb-1">Serene Bungalow</h6>

              <p className="small text-secondary mb-3">
                📍 Pune, Maharashtra
              </p>

              <div className="d-flex justify-content-between flex-wrap gap-2 small text-secondary mb-3">
                <span> 4 Beds</span>
                <span> 3 Baths</span>
                <span> 2,400 sq ft</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0">
                  ₹ 75,000 <small className="text-secondary">/month</small>
                </h5>
                <a href="#serene-bungalow" className="text-dark text-decoration-none">
                  →
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
