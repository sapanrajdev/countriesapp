import React from "react";
import "./styles/TableMessage.css";

export const TableMessage = ({ content }) => (
  <tr>
    <td className="tablemessage" colSpan={7}>
      {content}
    </td>
  </tr>
);
