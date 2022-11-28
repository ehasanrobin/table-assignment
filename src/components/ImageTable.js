import React, { useEffect, useState } from "react";
import upDownArrow from "../images/up-down-arrow.png";
import FullTableRow from "./FullTableRow";
import ImageTableRow from "./ImageTableRow";
const ImageTable = ({ data }) => {
  const [users, setUsers] = useState([]);
  const [direction, setdirection] = useState("ASC");

  useEffect(() => {
    fetch(`${data}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const sortedUsers = (col) => {
    if (col === "person.name") {
      if (direction === "ASC") {
        const sortedField = [...users].sort((a, b) =>
          a.person.name.toLowerCase() > b.person.name.toLowerCase() ? 1 : -1
        );
        setUsers(sortedField);
        setdirection("DSC");
      }
      if (direction === "DSC") {
        const sortedField = [...users].sort((a, b) =>
          a.person.name.toLowerCase() < b.person.name.toLowerCase() ? 1 : -1
        );
        setUsers(sortedField);
        setdirection("ASC");
      }
      return;
    }
  };
  return (
    <div className="table-data">
      <h2>Part 02</h2>
      <table className="tableUI">
        <thead>
          <tr>
            <th>
              name{" "}
              <span onClick={() => sortedUsers("person.name")}>
                <img src={upDownArrow} className="arrow-icon" alt="" />
              </span>
            </th>

            <th>email </th>

            <th>role </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <ImageTableRow
              user={user}
              sortedUsers={sortedUsers}
              key={index}
            ></ImageTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImageTable;
