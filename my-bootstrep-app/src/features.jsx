
export default function Features() {
  return (
    <section className="container-fluid bg-light py-4 mt-4">
      <div className="container">
        <div className="row text-center">

          {/* Feature 1 */}
          <div className="col-6 col-lg-3 border-end mb-4 mb-lg-0">
            <div className="mb-3">
              <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-dark fs-3" style={{ width: "60px", height: "60px" }}>
                ⌂
              </span>
            </div>
            <h6 className="fw-bold">Verified Listings</h6>
            <p className="small text-secondary mb-0">
              100% genuine listings<br />
              with verified owners.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="col-6 col-lg-3 border-end mb-4 mb-lg-0">
            <div className="mb-3">
              <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-dark fs-3" style={{ width: "60px", height: "60px" }}>
                ♧
              </span>
            </div>
            <h6 className="fw-bold">Trusted &amp; Secure</h6>
            <p className="small text-secondary mb-0">
              Safe transactions with<br />
              complete transparency.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="col-6 col-lg-3 border-end">
            <div className="mb-3">
              <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-dark fs-3" style={{ width: "60px", height: "60px" }}>
                ♧
              </span>
            </div>
            <h6 className="fw-bold">Expert Support</h6>
            <p className="small text-secondary mb-0">
              Guidance at every step<br />
              of your journey.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="col-6 col-lg-3">
            <div className="mb-3">
              <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-dark fs-3" style={{ width: "60px", height: "60px" }}>
                ♡
              </span>
            </div>
            <h6 className="fw-bold">Better Living</h6>
            <p className="small text-secondary mb-0">
              Find a home that fits<br />
              your lifestyle.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
