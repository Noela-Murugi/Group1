import React, { useState } from "react";
//  import DisplayData from "./DisplayData";

function Form() {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [paragraph,setParagraph]  = useState([]);

  const nameSubmit = (e)=>{
    e.preventDefault();

      if(firstName&&lastName){
        setFirst("")
        setLast("")
        setParagraph((p)=>[firstName,lastName])

      }
  }

  return (
    <div>
      <h1>Group 1 - Form Submit</h1>
    <form onSubmit={nameSubmit}>
      <label>
        First Name:
        <input
          value={firstName}
          name="firstName"
          onChange={(e) => {
             console.log(e.target.value);
            setFirst(e.target.value);
          }}
          type="text"
        />
      </label>
      <label>
        Last Name:
        <input
          value={lastName}
          name="lastName"
          onChange={(e) => {
             console.log(e.target.value);
            setLast(e.target.value);
          }}
          type="text"
        />
      </label>
      <button type="submit" >
        Submit
      </button>
    </form>

    {
      paragraph.map((paragraph)=><div>
        <p>{paragraph}  </p>
      </div>)
    }
    </div>

  );
}
export default Form;
