import { useState } from "react";

function User(props) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value, () => {
      console.log(value);
    });
  }

  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e, value)}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Add Work</button>
      </form>
    </div>
  );
}

export default User;
