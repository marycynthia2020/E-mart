import bag from "/Screenshot from 2025-07-05 11-12-57.png";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiSealWarningLight } from "react-icons/pi";
import { IoCard } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../allcontext/Context";
import { useNavigate } from "react-router";
import { CgArrowLeft } from "react-icons/cg";

const ShoppingCart = ({isModalOpen, setIsModalOpen}) => {
  const navigate = useNavigate()
  const { cartItems, setCartItems } = useContext(CartContext);
  const[totalPrice, setTotalPrice] = useState(0)
  const handleRemoveCartItem =(id) =>{
    const ItemsLeftInCart = cartItems.filter(item => item.id !== id)
    setCartItems(ItemsLeftInCart)
  }
  const handleIncrement = (id) =>{
    const updatedaCartItems = cartItems.map(item =>{
      if(item.id === id){
        return{...item, quantity: item.quantity+=1}
      } return item
    })
    setCartItems(updatedaCartItems)
  }
   const handleDecrement = (id) =>{
    const updatedaCartItems = cartItems.map(item =>{
      if(item.id === id && item.quantity >0){
        return{...item, quantity: item.quantity+-1}
      } return item
    })
    setCartItems(updatedaCartItems)
  }
  useEffect(()=>{
     let sum = 0
    cartItems.map(item => {
      sum += (item.price * item.quantity) 
      setTotalPrice(sum)
    })
  }, [cartItems])
// console.log(totalPrice)
  return (
    <>
      <div className="w-[90%] max-w-[1440px] mx-auto  ">
        <div className="mb-8">
          <div className="absolute left-20 top-20 "> <CgArrowLeft className='- bg-white p-1 text-4xl rounded-lg shadow-md w-14 cursor-pointer' onClick={()=> navigate(-1)} /></div>
          <h1 className="text-3xl lg:text-4xl font-semibold mb-2">
            Shopping Cart.
          </h1>
          <p className="text-gray-700 text-sm lg:text-base">
            Effortlessly manage your purchases and checkout with ease.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3">
          {cartItems.length > 0 
          ? cartItems.map(item => (
            <div className="">
            <div className="flex  items-center justify-between">
              <div className="flex gap-3  items-center">
                <div>
                  <img className="lg:w-24 w-24" src={item.image} alt="" />
                </div>

                <div className="flex flex-col gap-1.5 ">
                  <h1 className="font-medium  lg:text-xl">{item.name}</h1>
                  <p className="text-sm text-gray-400">{item.name}</p>
                  <div className="text-yellow-300 flex gap-1 ">
                    <div className="bg-black  p-1 rounded-md w-fit">
                      <IoMdStar />
                    </div>
                    <div className="bg-black w-fit p-1 rounded-md">
                      <IoMdStar />
                    </div>
                    <div className="bg-black w-fit p-1 rounded-md">
                      <IoMdStar />
                    </div>
                    <div className="bg-black w-fit p-1 rounded-md">
                      <IoMdStarHalf />
                    </div>
                    <div className="bg-black w-fit p-1 rounded-md">
                      <IoMdStarOutline />
                    </div>
                  </div>
                  <p className="text-gray-300">Color: <span className="text-black">Cream</span></p>{" "}
                </div>
              </div>

              <div className="flex items-center gap-16 lg:gap-44 pt-4 lg:pt-0">
                <div className="flex items-center border border-gray-300 rounded px-2 gap-2 ">
                  <button className="text-lg" onClick={()=>handleIncrement(item.id)} >+</button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="text-lg" onClick={()=> handleDecrement(item.id)}>-</button>
                </div>

                <div>
                  <p className="font-semibold lg:text-lg min-w-28">&#8358;{(item.price * item.quantity).toLocaleString()}.00</p>
                </div>

                <div className="bg-black text-white text-2xl p-2 w-fit">
                  <FaRegTrashAlt onClick={()=> handleRemoveCartItem(item.id)}/>
                </div>
              </div>
            </div>
            <hr className="border-t border-gray-500 mt-3 mb-12" />
            {/*  */}
          </div>
          ))
          : <div className=" text-3xl font-bold">No Item in the Cart</div>}
          </div>

          <div className="col-span-1">
            {cartItems.length > 0
            ? <div className=" border border-gray-200 p-2 rounded-lg">
            <h1 className="font-semibold text-gray-500 text-xl mb-4">Order Summary</h1>
            <div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-500">subtotal</p>
                <p className="font-semibold">&#8358;{totalPrice.toLocaleString()}.00</p>
              </div>

              <div className="flex  mb-4 justify-between">
                <p className="text-gray-500">Delivery</p>
                <p className="font-semibold">&#8358;1,500.00</p>
              </div>

              <div className="flex mb-4 justify-between">
                <p className="text-gray-500">Zip</p>
                <p className="font-semibold">&#8358;1,000.00</p>
              </div>

              {/* <div className="flex mb-4 justify-between">
                <p className="text-gray-500">Front & Back Design</p>
                <p className="font-semibold">&#8358;1,000.00</p>
              </div> */}

              <hr className="border-t border-gray-200 mt-8" />

              <div className="flex font-semibold pt-2 justify-between">
                <p className="text-lg font-semibold">Total</p>
                <p>&#8358;{(totalPrice + 2500).toLocaleString()}.00</p>
              </div>

              <hr className="border-t border-gray-200 mt-2 pb-5" />

              <div className="flex gap-1 p-1 rounded-md bg-white border shadow-md">
                  <PiSealWarningLight className="" />
                  <p className="text-gray-600 text-sm">
                  Please your products will be delivered in three to five working days
                </p>
              </div>
            </div>

            <div className="mt-12">
              <button className="flex items-center gap-2 text-white bg-black rounded-lg py-2 px-2 w-full  " onClick={()=> setIsModalOpen(true)}>
                Payment options{" "}
                <span>
                  <IoCard />
                </span>{" "}
              </button>
            </div>
            </div>
            : <div className="col-span-1"></div>
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
