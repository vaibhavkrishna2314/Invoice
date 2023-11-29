import React from 'react'

export default function ClientDt({className, clientAddress}) {
    return (
        <>
            <section className='mt-10'>
                <h2 className="text-2xl uppercase font-bold mb-1">{className}</h2>
                <p>
                    {clientAddress}
                </p>
            </section>
        </>
    )
}