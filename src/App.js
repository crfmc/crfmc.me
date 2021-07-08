import React from "react"
// import Landing from "./v1/components/Landing"
import Landing from "./v2/Landing";
// import { css } from "@emotion/core";
import "./App.css";
// import ClipLoader from "react-spinners/ClipLoader";

// function App()
// {
//   const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
  
//   let [loading, setLoading] = useState(false);
//   let [color, setColor] = useState("#ffffff");

//   useEffect(() =>
//   {
//     setLoading(true)
//     setTimeout(() =>
//     {
//       setLoading(false)
//     })
//   }, 5000)
//   return (
//     <div className="App">
//       {loading ?
//         <ClipLoader color={color} loading={loading} css={override} size={150} />
//         : <Landing_v2 />}
//     </div>
//   );
// }


function App() {
  return (
    <>
      <Landing />
    </>
  );
}

export default App;
