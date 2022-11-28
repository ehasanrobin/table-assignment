import React from "react";
import CityTable from "./CityTable";
import EmailTable from "./EmailTable";
import FullTable from "./FullTable";
import ImageTable from "./ImageTable";
import "./TableComponent.css";
const TableComponent = ({ data, tableConfig }) => {
  if (tableConfig === "fullTable") {
    return <FullTable data={data}></FullTable>;
  } else if (tableConfig === "imageTable") {
    return <ImageTable data={data}></ImageTable>;
  } else if (tableConfig === "emailTable") {
    return <EmailTable data={data}></EmailTable>;
  } else if (tableConfig === "cityTable") {
    return <CityTable data={data}></CityTable>;
  }
};

export default TableComponent;
