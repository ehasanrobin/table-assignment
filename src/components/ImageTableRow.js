import React from "react";

const ImageTableRow = (props) => {
  const { person, email, role } = props.user;
  return (
    <tr>
      <td>
        <div className="profile-box">
          <img src={person.avatar} alt="" />
          <span>{person.name}</span>
        </div>
      </td>

      <td>
        <a href="">{email}</a>
      </td>
      <td>{role}</td>
    </tr>
  );
};

export default ImageTableRow;
