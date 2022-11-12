import React, { Component } from "react";
import Table from "react-bootstrap/Table";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const { products } = props;
  let tableHeading = ["name", "price", "quantity", "description", "category"];
  return (
    <div style={{ marginLeft: 200 }}>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {tableHeading.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr>
              <td>{p._id.slice(4, 10)}</td>
              {tableHeading.map((h) => (
                <td>{p[h]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
