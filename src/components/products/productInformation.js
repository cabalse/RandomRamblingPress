import React from 'react';

function display(value) {
  return value !== 'N/A';
}

export default function ProductInformation(props) {
  return (
    <table className="product-info">
      <tbody>
        {display(props.item.format) ? (
          <tr>
            <th scope="row">Format</th>
            <td>{props.item.format}</td>
          </tr>
        ) : null}
        {display(props.item.pages) ? (
          <tr>
            <th scope="row">Pages</th>
            <td>{props.item.pages}</td>
          </tr>
        ) : null}
        {display(props.item.status) ? (
          <tr>
            <th scope="row">Status</th>
            <td>{props.item.status}</td>
          </tr>
        ) : null}
        {display(props.item.price) ? (
          <tr>
            <th scope="row">Price</th>
            <td>{props.item.price}</td>
          </tr>
        ) : null}
      </tbody>
    </table>
  );
}
