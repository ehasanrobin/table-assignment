import React from "react";

const CityTableRow = (props) => {
  const { person, email, city, joiningDate, role } = props.user;
  return (
    <tr>
      <td>
        <div className="profile-box">
          <img src={person.avatar} alt="" />
          <span>{person.name}</span>
        </div>
      </td>
      <td>{city}</td>

      <td>{joiningDate}</td>
      <td>{role}</td>
    </tr>
  );
};

export default CityTableRow;
