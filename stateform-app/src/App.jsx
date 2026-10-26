import "./App.css";
import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  dob: "",
  password: "",
};

function App() {
  const [formData, setFormData] = useState({ ...initialForm });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    setIsSubmitted(true);
    setShowPassword(false);
    setError("");
  }

  function handleReset() {
    setFormData({ ...initialForm });
    setShowPassword(false);
    setIsSubmitted(false);
    setError("");
  }

  return (
    <div className="app-shell">
      {!isSubmitted ? (
        <div className="form-card">
          <div className="form-heading">
            <h1>Create Account</h1>
            <p>Join us today and get started</p>
          </div>

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field-group">
              <label>Full Name:</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field-group">
              <label>Email Address:</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field-group">
              <label>Phone Number:</label>
              <input
                name="phone"
                type="tel"
                placeholder="Enter 10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Enter a 10-digit phone number"
                required
              />
            </div>

            <div className="form-row">
              <div className="field-group">
                <label>Age:</label>
                <input
                  name="age"
                  type="number"
                  placeholder="Enter age"
                  value={formData.age}
                  onChange={handleChange}
                  min="1"
                  max="120"
                  required
                />
              </div>

              <div className="field-group">
                <label>Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">
                    Prefer not to say
                  </option>
                </select>
              </div>
            </div>

            <div className="field-group">
              <label>Date of Birth:</label>
              <input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field-group">
              <label>Password:</label>
              <div className="password-wrapper">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter at least 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  minLength={8}
                  required
                />

                <button
                  className="password-toggle"
                  type="button"
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                >
                  {showPassword ? "Hide Password" : "Show Password"}
                </button>
              </div>
            </div>

            {error && <p className="form-error">{error}</p>}

            <button className="primary-button" type="submit">
              Create Account
            </button>
          </form>
        </div>
      ) : (
        <div className="success-card">
          <div className="success-icon">✓</div>

          <h1>Registration Successful!</h1>

          <p className="success-description">
            Your account has been created successfully.
          </p>

          <div className="details-card">
            <h3>Submitted Details</h3>

            <div className="detail-row">
              <span className="detail-label">Full Name</span>
              <span className="detail-value">{formData.fullName}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Email Address</span>
              <span className="detail-value">{formData.email}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Phone Number</span>
              <span className="detail-value">{formData.phone}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Age</span>
              <span className="detail-value">{formData.age}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Gender</span>
              <span className="detail-value">{formData.gender}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Date of Birth</span>
              <span className="detail-value">{formData.dob}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Password</span>
              <span className="detail-value">
                {"*".repeat(formData.password.length)}
              </span>
            </div>
          </div>

          <button
            className="secondary-button"
            type="button"
            onClick={handleReset}
          >
            Back to Form
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
