import React, { useEffect, useState } from "react";
import upDownArrow from "../images/up-down-arrow.png";
import CityTableRow from "./CityTableRow";

const CityTable = ({ data }) => {
  const [users, setUsers] = useState([]);
  const [direction, setdirection] = useState("ASC");

  useEffect(() => {
    fetch(`${data}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const sortedUsers = (col) => {
    if (direction === "ASC") {
      const sortedField = [...users].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUsers(sortedField);
      setdirection("DSC");
    }
    if (direction === "DSC") {
      const sortedField = [...users].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setUsers(sortedField);
      setdirection("ASC");
    }
  };
  return (
    <div className="table-data margin-top">
      <table className="tableUI">
        <thead>
          <tr>
            <th>name </th>
            <th>
              city{" "}
              <span onClick={() => sortedUsers("city")}>
                <img src={upDownArrow} className="arrow-icon" alt="" />
              </span>
            </th>

            <th>
              joining date{" "}
              <span onClick={() => sortedUsers("joiningDate")}>
                <img src={upDownArrow} className="arrow-icon" alt="" />
              </span>
            </th>
            <th>
              role{" "}
              <span onClick={() => sortedUsers("role")}>
                <img src={upDownArrow} className="arrow-icon" alt="" />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <CityTableRow
              user={user}
              sortedUsers={sortedUsers}
              key={index}
            ></CityTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityTable;
