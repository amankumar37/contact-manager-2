
function Work(props) {
    return (
      <div>
        <h1>{props.message}</h1>
        <button onClick={props.delete_function}>Delete</button>
      </div>
    );
  }
  
  export default Work;