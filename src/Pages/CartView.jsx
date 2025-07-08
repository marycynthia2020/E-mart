import React from "react";
import bag from "/Screenshot from 2025-07-05 11-12-57.png";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useParams } from "react-router";
import { data } from "../data";

const CartView = () => {
  const {id} = useParams()
  const foundItem = data.find(item => item.id === +id)
  
  
  return (
    <div className="w-[90%] max-w-[1440px] mx-auto">
      <h2 className="text-2xl font-semibold">Your Cart.</h2>
      <p className="text-gray-600">Review and manage the items in your shopping cart.</p>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="flex flex-col lg:w-1/2 ">
          <div className="w-full  flex items-center justify-center">
            <img
              src={foundItem.image}
              alt={foundItem.name}
              className=" rounded-lg  aspect-square h-96"
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-6 items-center justify-center sm:justify-start text-center">
            {foundItem.variants.map(item => (
              <div key={item.color} className="text-center">
                <img src={item.image} alt={`${item.color} ${foundItem.name}`} className=" rounded-sm h-20 w-20 object-contain mx-auto" />
                <p className="text-sm mt-1">{item.color}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-3">
          <p className="text-xs text-gray-500 mt-4">Product</p>
          <div className="flex items-center gap-2 text-sm text-gray-800 bg-green-100 border px-2 py-1 w-fit rounded">
            🚚 Delivery fee
            <span className="bg-gray-900 px-1 py-1 rounded text-xs text-gray-100">₦{foundItem.deliveryFee}</span>
          </div>

          <h3 className="text-xl">{foundItem.name}</h3>

          <div className="flex flex-wrap items-center gap-1 ">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                <AiFillStar />
              </span>
            ))}
            <span className="p-2 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
            <span className="p-1 ml-2 border rounded-md font-bold">{foundItem.rating}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-sm font-medium">
              Price:
              <span className="text-lg border border-gray-300 p-1 ml-1 rounded">₦{foundItem.price.toLocaleString()}</span>
            </div>
            <span className="font-bold text-lg text-gray-400">|</span>
            <div className="flex items-center gap-2">
              <span>Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded px-2">
                <button className="text-lg">+</button>
                <span className="px-2">1</span>
                <button className="text-lg">-</button>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600">{foundItem.description.slice(0, 80)}....</p>

          <div className="flex flex-col gap-3">
            <button className="py-2 w-full sm:w-7/12 border border-black rounded-md text-black font-medium">
              Buy Now
            </button>
            <button className="py-3 bg-black text-white rounded-md font-medium w-full sm:w-7/12">
              Add to cart
            </button>
          </div>

          <div className="relative mt-4">
            <select className="w-full border border-green-700 outline-none rounded-md px-4 py-3 text-green-700">
              <option>Select your location</option>
              <option>Lagos</option>
              <option>Abuja</option>
            </select>
          </div>
        </div>
      </div>

      

      {/* <div className="mt-4 space-x-3 text-sm text-gray-600 flex flex-wrap">
        <label><input type="radio" name="zip" /> Design</label>
        <label><input type="radio" name="zip" /> Plane</label>
        <label><input type="radio" name="zip" /> Design and Plane</label>
        <label><input type="radio" name="zip" /> None</label>
        <p className="text-xs text-gray-400 mt-2 w-full">Design adds ₦1,000 extra while Plane adds ₦500</p>
      </div> */}

      <div className="mt-4">
        <p className="text-gray-900 text-xl font-bold">Description</p>
        <p className="text-sm text-gray-600 mb-6">{foundItem.description}</p>

      </div>

      <div className="mt-6 max-w-2xl flex flex-col mx-auto px-4">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        <p className="text-gray-500 mb-6 text-sm">Customer's Testimonies</p>

        <div className="mb-10 pb-6">
          {foundItem.customerReviews.map(review =>(
            <div key={review.name}>
              <div className="flex items-center gap-3">
                <img src={review.image} alt={`customer ${review.name}`} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-medium">{review.name}</p>
                  <p className="text-sm text-gray-500">May 15, 2024</p>
                </div>
              </div>

              <div className="mt-2 flex items-center gap-1 flex-wrap">
                <span className="text-sm font-semibold">Rating:</span>
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                    <AiFillStar />
                  </span>
                ))}
                <span className="p-2 bg-black text-yellow-400 rounded-md">
                  <AiOutlineStar />
                </span>
              </div>

              {/* <p className="text-sm text-gray-600 mt-2">
                Size: <span className="font-semibold">16.g</span> | Color:{" "}
                <span className="font-semibold">White</span> | Design Pattern:
                <span className="font-semibold">Classic</span>
              </p> */}

              <div className="flex flex-wrap gap-3 mt-3">
                <img src={review.image} alt={foundItem.name} className="h-24 w-24 rounded-lg border object-cover" />
                <div className="h-24 w-24 rounded-lg border flex items-center justify-center text-gray-400">+</div>
              </div>

              <p className="text-sm text-gray-700 mt-4">{review.review}</p>
            </div>
          ))}
         
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-medium">Bags You may like</h2>
        <p className="text-sm text-gray-600">Similar bags from the one selected</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 cursor-pointer">
          {[...Array(8)].map((_, i) => (
            <div key={i}>
              <img src={bag} alt="Bag" className="rounded bg-contain w-full" />
              <div className="flex flex-row justify-between mt-4 text-gray-800">
                <span>Stylish Bag</span>
                <span>₦5,000</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartView;