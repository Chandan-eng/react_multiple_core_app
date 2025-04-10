import { useState } from "react";

const UserForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser, // Copy existing state
      [name]: value, // Update the specific property
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("User Data:", user); // Process the form data
  };

  // Handle form reset
  const handleReset = () => {
    setUser({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="container w-25">
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
      <h1>User Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name" // Add name attribute
            value={user.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email" // Add name attribute
            value={user.email}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone" // Add name attribute
            value={user.phone}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            name="address" // Add name attribute
            value={user.address}
            onChange={handleInputChange}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group mt-4 text-center">
          <button
            className="btn btn-secondary"
            type="button" // Change type to "button"
            onClick={handleReset} // Add onClick handler
          >
            Reset
          </button>
          <button className="btn btn-primary ms-4" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;