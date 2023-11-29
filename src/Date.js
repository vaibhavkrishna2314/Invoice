import React from 'react'

export default function Date({invoiceNumber, invoiceDate, dueDate}) {
    return (
        <>
            <article className="mt-10 mb-15 flex items-end justify-end">
                <ul>
                    <li><span className="font-bold ">Invoice Number: </span>{invoiceNumber}</li>
                    <li><span className="font-bold ">Invoice date: </span>{invoiceDate}</li>
                    <li><span className="font-bold ">Due date: </span>{dueDate}</li>
                </ul>
            </article>
        </>
    )
}