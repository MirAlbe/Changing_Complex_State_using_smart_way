import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target; //Object destructuring

    setContact((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email,
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
