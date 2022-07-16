import React from 'react'
import './seacrch.css'

export default function Search() {
  const drugList = [{ drug_name: 'Paracetamol', store_name: 'Ahmad and Sons Pharmacy', price: 300},
  { drug_name: 'Boska', store_name: 'Alihsan and Sons pharmacutical NIG LTD ', price: 290.98},
  { drug_name: 'Panadol Extra', store_name: 'Safiya store and Pharmacy', price: 310.50},
  { drug_name: 'Sudrex', store_name: 'Alihsan pharmacutical NIG LTD', price: 280.999},
  { drug_name: 'Diclofenac', store_name: 'Ahmad and Sons Pharmacy', price: 290.98},
  { drug_name: 'Relief', store_name: 'Relief Pharmacy', price: 290.9870},]

  return (
    <div>
      <h1 className='result' >Your Search Result</h1>
    <div className='underline'></div>
    <div className='ahmad'>
        {drugList.map((item, i) => (
          <div style={{marginBottom: 10 }} key={i}>
          <a href='' className='med'>{item.drug_name}</a>
          <p style={{marginTop:-5}}>Available at : {item.store_name} </p>
          <p style={{marginTop:-12}}>Price : ₦{item.price}</p>
          <div >
            <button className='button' >Add to Cart</button>
            <button className='button1' > Save</button>
          </div>
        </div>
        ))}
        {/* <div className='hr'></div>
        <div style={{marginBottom: 10 }}>
          <a href='' className='med'>Panadol Extra</a>
          <p>Available at : Safiya store and Pharmacy </p>
          <p>price : ₦310.50</p>
          <div >
            <button className='button' >Add to Card</button>
            <button className='button1' > save</button>
          </div>
        </div>
        <div className='hr'></div>
        <div style={{marginBottom: 10 }}>
          <a href='' className='med'>Diclofenac</a>
          <p>Available at : Kunyar Chemist pharmacutical LTD</p>
          <p>price : ₦290.98</p>
          <div >
            <button className='button' >Add to Card</button>
            <button className='button1' > save</button>
          </div>
        </div>
        <div className='hr'></div>
        <div style={{marginBottom: 10 }}>
          <a href='' className='med'>Sudrex</a>
          <p>Available at : Al'ihsan pharmacutical NIG LTD </p>
          <p>price : ₦280.999 </p>
          <div >
            <button className='button' >Add to Card</button>
            <button className='button1' > save</button>
          </div>
        </div>
        <div className='hr'></div>
        <div style={{marginBottom: 10 }}>
          <a href='' className='med'>Boska</a>
          <p>Available at : Al'ihsan and Son's pharmacutical NIG LTD </p>
          <p>price : ₦280.999 </p>
          <div >
            <button className='button' >Add to Card</button>
            <button className='button1' > save</button>
          </div>
        </div> */}
        </div>
    </div>
  )
}
