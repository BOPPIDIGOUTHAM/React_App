import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef();
  console.log("result")
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("A name was submitted: " + inputRef.current.value);
    
  };

  return (
    <form onSubmit={handleSubmit}>
    <br></br>
      <label>
        Name:
      <input type="text" ref={inputRef} />
      </label>
      <br></br>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledComponent;