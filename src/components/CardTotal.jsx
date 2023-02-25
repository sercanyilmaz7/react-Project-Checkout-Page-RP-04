import React from 'react'

const taxtRate=0.18;
const shipping=25;

const CardTotal = ({data}) => {
    console.log(data)
     const Subtotal = data.reduce(
       (acc, item) =>
         (Number(item.amount) * Number(item.price) * Number(item.dampingRate)) + acc,
       0
     );
     console.log(Subtotal)
  return (
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <th>Subtotal</th>
          <td className="text-end">{Subtotal.toFixed(2)}</td>
        </tr>
        <tr>
          <th scope="row">Tax(18%)</th>
          <td className="text-end">{(Subtotal * taxtRate).toFixed(2)}</td>
        </tr>
        <tr>
          <th scope="row">Shipping</th>
          <td className="text-end">{shipping.toFixed(2)}</td>
        </tr>
        <tr>
          <th scope="row">Total</th>
          <td className="text-end">{((Subtotal)+(Subtotal * taxtRate)+(shipping)).toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CardTotal