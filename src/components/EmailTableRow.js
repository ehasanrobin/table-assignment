import React from "react";

const EmailTableRow = (props) => {
  const { email, joiningDate, role } = props.user;
  return (
    <tr>
      <td>
        <a href="">{email}</a>
      </td>
      <td>{joiningDate}</td>
      <td>{role}</td>
    </tr>
  );
};

export default EmailTableRow;
