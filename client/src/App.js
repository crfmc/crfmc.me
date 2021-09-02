import React, {useEffect} from "react"
// import Landing from "./v1/components/Landing"
import Landing from "./v2/Landing";
import IsLoadingHOC from "./v2/IsLoadingHOC";
// import { css } from "@emotion/core";
import "./App.css";
// import ClipLoader from "react-spinners/ClipLoader";

export const App = props => {
  const { setLoading } = props;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500)

  }, []);

  return (
    <>
      <Landing />
    </>
  );
}

export default IsLoadingHOC(App, 'Loading');
