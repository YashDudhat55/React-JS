
export default function Footer() {
    return (
        <footer className="bg-white border-top pt-4">
            <div className="container">

                <div className="row g-4 pb-4">

                    {/* Brand */}
                    <div className="col-12 col-md-4">
                        <a
                            href="#"
                            className="navbar-brand d-flex align-items-center gap-2 mb-2"
                        >

                            <span className="d-flex flex-column">
                                <span className="fw-bold text-dark">
                                    Everlight Homes
                                </span>

                            </span>
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="col-6 col-md-2">
                        <h6 className="fw-bold small mb-2">
                            Quick Links
                        </h6>

                        <ul className="list-unstyled small mb-0">
                            <li>
                                <a href="#" className="text-secondary text-decoration-none">Home</a>
                            </li>
                            <li>
                                <a href="#properties" className="text-secondary text-decoration-none">Properties</a>
                            </li>
                            <li>
                                <a href="#about" className="text-secondary text-decoration-none">About Us</a>
                            </li>
                            <li>
                                <a href="#services" className="text-secondary text-decoration-none">Services</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-secondary text-decoration-none">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-12 col-md-4">
                        <h6 className="fw-bold small mb-2">
                            Get in Touch
                        </h6>

                        <p className="small text-secondary mb-2">
                            +91 98765 43210
                        </p>

                        <p className="small text-secondary mb-2">
                            hello@everlighthomes.com
                        </p>

                        <p className="small text-secondary mb-0">
                            12th Floor, Horizon Tower,
                            <br />
                            MG Road, Bengaluru, Karnataka 560001
                        </p>
                    </div>
                </div>
                {/* Copyright */}
                <div className="border-top py-3">
                    <div className="row align-items-center g-2">

                        <div className="col-12 col-md-6">
                            <p className="small text-secondary mb-0">
                            2025 Everlight Homes. All rights reserved.
                            </p>
                        </div>

                        <div className="col-12 col-md-6 text-md-end">
                            <a href="#privacy" className="small text-secondary text-decoration-none me-3">
                                Privacy Policy
                            </a>

                            <a href="#terms" className="small text-secondary text-decoration-none">
                                Terms Conditions
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}
