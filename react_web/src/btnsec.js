
// import React, { useState } from "react";
// import Container from "react-bootstrap/esm/Container";

// const Newbtn = () => {
//   const [count, setCount] = useState(0);

//   const incrementHandler = () => {
//     setCount(count + 1);
//   };

//   const decrementHandler = () => {
//     setCount(count - 1);
//   };
//   return (
//     <Container>
//       <div className="text-center">
//         <h1>Count: {count}</h1>
//         <button onClick={incrementHandler} className="mx-3">Inc</button>
//         <button onClick={decrementHandler} className="mx-3">Dec</button>
//       </div>
//     </Container>

//   );
// };

// export default Newbtn;

import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";

const Newbtn = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  const incrementHandler = () => {
    if (count >= 5) {
      setError("Error");
    } else {
      setCount(count + 1);
      setError("");
    }
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };

  return (
    <Container>
      <div className="text-center">
        <h1>Count: {count}</h1>
        {error && <div className="text-danger">{error}</div>}
        <button onClick={incrementHandler} className="mx-3">Inc</button>
        <button onClick={decrementHandler} className="mx-3">Dec</button>
      </div>
    </Container>
  );
};

export default Newbtn;
