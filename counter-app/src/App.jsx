
import { useState } from "react";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(1);

  const price = 18999;

  return (
    <main className="cart-page">
      <article className="cart-item">
        <div className="product-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRSLBTVPi9nJxGJX0COfvj4aSYeKevs4FToTwdOY-EtA&s=10"
            alt="Samsung Galaxy Buds3 Pro"
          />
        </div>

        <div className="product-info">
          <span className="product-category">Accessories</span>

          <h2>Samsung Galaxy Buds3 Pro</h2>

          <p className="product-description">
            Wireless earbuds with premium sound, ANC, and long
            battery life.
          </p>

          <div className="product-features">
            <span>♬ &nbsp; ANC</span>
            <span>⬡ &nbsp; IP57</span>
            <span>▣ &nbsp; 30H Battery</span>
            <span>ᛒ &nbsp; Bluetooth 5.4</span>
          </div>
        </div>

        <div className="product-actions">
          <h3>
            ₹{price.toLocaleString("en-IN")}
          </h3>

          <p className="stock-status">
            <span /> In Stock
          </p>

          <div className="action-row">
            <div className="quantity-control">
              <button
                onClick={() =>
                  setQuantity((q) => Math.max(1, q - 1))
                }
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity((q) => q + 1)
                }
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              className="delete-button"
              aria-label="Remove product"
              onClick={() => setQuantity(0)}
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M8 6V4h8v2" />
                <path d="m19 6-1 14H6L5 6" />
                <path d="M10 10v6M14 10v6" />
              </svg>
            </button>
          </div>
        </div>
      </article>

      {quantity === 0 && (
        <div className="removed-message">
          Product removed from cart.
          <button onClick={() => setQuantity(1)}>
            Undo
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
