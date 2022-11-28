import { useEffect, useState } from "react";
import "./App.css";
import TableComponent from "./components/TableComponent";

function App() {
  const data = "tableTestData.json";

  return (
    <div className="">
      <TableComponent data={data} tableConfig="fullTable"></TableComponent>
      <TableComponent data={data} tableConfig="imageTable"></TableComponent>
      <TableComponent data={data} tableConfig="emailTable"></TableComponent>
      <TableComponent data={data} tableConfig="cityTable"></TableComponent>
    </div>
  );
}

export default App;
