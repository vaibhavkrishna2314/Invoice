import React from 'react'
// import ReactToPrint from "react-to-print";

export default function Header({handleprint}) {
    return (
        <>
            <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
                <div>
                    <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Trading Company</h1>
                </div>
{/* three button inside the invoice  send ,print , download */}
                {/* <div>
                    <ul className="flex items-center justify-between flex-wrap">
                        <li><button onClick={handleprint} className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-200">Print</button></li>
                        <li className='mx-2'><button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-200">Download</button></li>
                        <li><button className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-200">Send</button></li>
                    </ul>
                </div> */}
            </header>
        </>
    )
}