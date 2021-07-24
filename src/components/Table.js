import React from 'react';
import './_Table.css'

const Table = ({drivers}) => {
  return (
    <table id="table-driver">
      <thead>
        <tr>
          <th>Driver</th>
          <th>Company</th>
          <th>Distance</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {drivers.map((item) => (
          <tr>
            <td> {item.name} </td>
            <td> {item.company} </td>
            <td> {item.distance.toLocaleString()} km </td>
            <td> {item.score} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
