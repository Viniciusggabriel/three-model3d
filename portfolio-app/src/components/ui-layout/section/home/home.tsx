import React from "react";
import Rocket3Ddark from "../../../3D/rocket3Ddark";
import Rocket3Dlight from "../../../3D/rocket3Dlight";

const Home: React.FC = () => {
  const theme = localStorage.getItem("theme");

  return (
    <section>{theme == "dark" ? <Rocket3Ddark /> : <Rocket3Dlight />}</section>
  );
};

export default Home;
