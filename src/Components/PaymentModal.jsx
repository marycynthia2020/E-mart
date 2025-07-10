import React from 'react'
import { RiVisaLine } from "react-icons/ri";
import { FaStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const PaymentModal = ({isModalOpen, setIsModalOpen}) => {
    const handleSubmit =()=>{
      alert("Purchase successfull")
    }
  return (
    // <div className='w-[90%] h-screen max-w-[1440px] mx-auto border border-red-300 relative'>
      <div className='   absolute  transform  left-1/2 -translate-x-1/2 top-10 bg-gray-200   mx-auto  pt-10 pb-20 lg:px-20   z-[999]'>
        <button className='absolute right-10 top-5 font-bold text-2xl cursor-pointer' onClick={()=> setIsModalOpen(false)}>X</button>
        <form className='' onSubmit={handleSubmit}>
          <h1 className='text-center text-2xl font-semibold font-raleway'>Payment Method.</h1>
          <p className='font-raleway text-gray-600  text-sm mt-2 '>Effortlessly manage your purchases and checkout with ease.</p>
          <div className='w-4/5 mx-auto items-center flex justify-between'>
            <RiVisaLine size={40} />
            <FaStripe size={44} />
            <FaCcMastercard size={32} />
            <FaPaypal size={32} />
            <FaApple size={32} />
          </div>
          <div className="mt-2 flex flex-col mb-5">
            <label className='font-raleway text-gray-600 text-xl'>Card Number</label>
            <input type="text" className='outline-none h-12 p-4 bg-lightcyan  border rounded-sm' placeholder='5355 0348 5945 5045' required minLength={16} maxLength={16} />
          </div>
          <div className='mt-2 flex items-center gap-4'>
            <div className='flex flex-col w-1/2'>
              <label className='text-gray-600 font-raleway'>CVV</label>
              <input type="text" className='outline-none bg-lightcyan h-12 border rounded-sm p-4 font-montserrat' placeholder='0522' maxLength={3}  required />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className='text-gray-600 font-raleway'>Expires</label>
              <input type="date" className='outline-none bg-lightcyan h-12 border rounded-sm p-4 font-montserrat' placeholder='07/06/2024' required />
            </div>
          </div>
          <div className='flex gap-2 mt-2 '>
            <input type="checkbox" className='accent-black size-4' required />
            <p className='text-customGray font-montserrat'>save my debit card information</p>
          </div>
          <div className='mt-8'>
            <button className='text-lightWhite bg-darkGreen h-10 w-full rounded-sm font-semibold font-raleway'>Checkout</button>
          </div>
        </form>
      </div>
    // </div>
    
  )
}

export default PaymentModal