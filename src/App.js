import { useState, useRef } from "react";
import Table from "./Table";
import Header from "./Header";
import Details from "./Details";
import ClientDt from "./ClientDt";
import Date from "./Date";
import Footer from "./Footer";
import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("Vaibhav Krishna")
  const [address, setAddress] = useState("Sitamarhi ,Bihar")
  const [email, setemail] = useState("Vkrishna2314@gmail.com")
  const [phone, setphone] = useState("8002434067")
  const [bankName, setbankName] = useState("Bank of Borada")
  const [bankAccount, setbankAccount] = useState("44250100007092")
  const [website, setwebsite] = useState("www.vaibhav.com")
  const [clientName, setclientName] = useState("")
  const [clientAddress, setclientAddress] = useState("")
  const [invoiceNumber, setinvoiceNumber] = useState("")
  const [invoiceDate, setinvoiceDate] = useState("")
  const [dueDate, setdueDate] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const componentRef = useRef()
  const handleprint = () => {
    window.print()
  }
  return (
    <>
      <main className="p-5 m-5 md:maz-w-xl md:mx-auto xl:max-w-4xl lg:max-w-2xl bg-white rounded shadow">
        {showInvoice ? (
           <>
        <ReactToPrint trigger={() => <ul className="flex items-center  flex-wrap"><li><button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transitiom-all duration-300" >Print/Download</button> </li>
        <li><button className="bg-green-500 ml-2 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-blue-500 transitiom-all duration-300" >Send</button> </li>
        </ul>
        }
        
        content={() => componentRef.current}/>
        
          <div ref={componentRef} className="p-6">
          <Header handleprint={handleprint} />

          {/* Your Details */}
          <Details name={name} address={address} />

          {/* Client Address */}
          <ClientDt className={clientName} clientAddress={clientAddress} />

          {/* Date */}
          <Date invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

          {/* Table */}
          <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal}/>  

          {/* Footer */}
          <Footer name={name} address={address} website={website} email={email} phone={phone} bankAccount={bankAccount} bankName={bankName} />

        </div>
          <button onClick={() => setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 border border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-200 ">
            Edit Info
          </button>
          
          </>
          ) : (
          <>
            <div className="flex flex-col justify-center">
              <article className="grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Your Name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Your Address</label>
                  <input
                    type="text"
                    name="text"
                    id="address"
                    placeholder="Enter your Address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Your Website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setwebsite(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Enter Your Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>
              </article>
              <article className="grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter Your Bank name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter name of the Bank"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setbankName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bankAccount">Enter Account Number</label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your Bank Account Number"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setbankAccount(e.target.value)}
                  />
                </div>
              </article>
              <article className="grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter Client Name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter Client Name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setclientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Enter address of Client</label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter address of client"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setclientAddress(e.target.value)}
                  />
                </div>
              </article>
              <article className="grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Enter Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Enter Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setinvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Enter Date of the Invoice</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Enter the Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setinvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                    <input
                      type="Date"
                      name="dueDate"
                      id="dueDate"
                      placeholder="Enter the Date"
                      autoComplete="off"
                      value={dueDate}
                      onChange={(e) => setdueDate(e.target.value)}
                  />
                </div>
              </article>

              <article>
                <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} list={list} setList={setList} total={total} setTotal={setTotal} />
              </article>


              <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 border border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-200 ">Preview Invoice</button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;