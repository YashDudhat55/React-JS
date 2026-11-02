
export default function Slider() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="./src/Images/hero1.png"
                        className="d-block w-100"
                        style={{ height: "578px" }}
                        alt="Luxury property"
                    />
                </div>

                <div className="carousel-item">
                    <img
                        src="./src/Images/hero2.png"
                        className="d-block w-100"
                        style={{ height: "578px" }}
                        alt="Modern apartment"
                    />
                </div>

                <div className="carousel-item">
                    <img
                        src="./src/Images/hero3.png"
                        className="d-block w-100"
                        style={{ height: "578px" }}
                        alt="Luxury villa"
                    />
                </div>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" />
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
