// import React from 'react'
// import {BsCurrencyRupee} from 'react-icons/bs'

// export default function Table({list,total}) {
//     return (
//         <>
//             <table width="100%" className='mb-10'>
//                 <thead >
//                    <tr className='bg-gray-300 text-gray-800'>
//                        <td className="p-2 border font-bold">Item Description</td>
//                        <td className="p-2 border font-bold">Quantity</td>
//                        <td className="p-2 border font-bold">Price</td>
//                        <td className="p-2 border font-bold">Amount</td>
//                    </tr>
//                </thead>

//             {list.map(({id,description,quantity,price,amount})=>(
//                <React.Fragment key={id}>
//                <tbody>
//                    <tr>
//                        <td >{description}</td>
//                        <td >{quantity}</td>
//                        <td >{price}</td>
//                        <td >{amount}</td>
//                    </tr>
//                </tbody>
//                </React.Fragment>
//             ))}
//             </table>
//             <div>
//             <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold"> Total Amount : <BsCurrencyRupee className='text-black-500 font-bold text-4xl' /> {total.toLocaleString()}</h2>
//            </div>
//         </>
//     )
// }
import React from 'react';
import { BsCurrencyRupee } from 'react-icons/bs';

export default function Table({ list, total }) {
  return (
    <div className="p-4">
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-300 text-gray-800">
            <th className="p-2 border font-bold">Item Description</th>
            <th className="p-2 border font-bold">Quantity</th>
            <th className="p-2 border font-bold">Price</th>
            <th className="p-2 border font-bold">Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, description, quantity, price, amount }) => (
            <tr key={id} className="text-gray-800">
              <td className="p-2 border">{description}</td>
              <td className="p-2 border">{quantity}</td>
              <td className="p-2 border">
                {/* <BsCurrencyRupee className="inline" />  */}
                {price}
              </td>
              <td className="p-2 border">
                <BsCurrencyRupee className="inline" /> {amount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h2 className="text-right text-gray-800 text-2xl font-bold">
          Total Amount: <BsCurrencyRupee className="inline" />{' '}
          {total.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}

