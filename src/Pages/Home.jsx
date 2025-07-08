import { VscSettings } from "react-icons/vsc"
import first from '../assets/first.png'
import second from '../assets/second.png'
import { data } from "../data"
import { useNavigate } from "react-router"
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className=" mb-8 w-[90%] mx-auto max-w-[1440px]">
      <div className="hidden w-2/6 mx-auto lg:flex justify-around items-center mt-5 gap-2">
        <button className="h-12 flex gap-3 items-center bg-black rounded-l-full rounded-r-full p-5 text-white">
          <VscSettings className="text-2xl" /> All
        </button>

        <button className="h-12 text-stone-700 flex gap-3 items-center border border-stone-600 rounded-l-full rounded-r-full p-5 ">
          Corduroy
        </button>
        <button className="h-12 text-stone-700 flex gap-3 items-center border border-stone-600 rounded-l-full rounded-r-full p-5 ">
          Denim
        </button>
        <button className="h-12 text-stone-700 flex gap-3 items-center border border-stone-600 rounded-l-full rounded-r-full p-5 ">
          Adire
        </button>
        <button className="h-12 text-stone-700 flex gap-3 items-center border border-stone-600 rounded-l-full rounded-r-full p-5 ">
          Leather
        </button>
      </div>


       <div className='mt-10 '>
         <p className='text-3xl font-semibold'>Shop your favourite Products.</p>
         <p className='text-gray-500 mt-2'>We offer you the best at affordable prices</p>
      </div>
      <div className="productgrid grid md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 gap-6 mt-8" id="shop">{data.map(product => (
        <div key={product.id} onClick={()=> navigate(`productdetails/${product.id}`)}>
          <img src={product.image} alt={product.name}  className="rounded-md"/>
          <div className="flex items-center justify-between text-gray-800 mt-4">
            <p>{product.name}</p>
            <p>#{product.price.toLocaleString()}</p>
          </div>
        </div>
      ))}</div>
     {/* <div className=' bg-orange-50 bg-opacity-30 flex  border-gray-200 border  mt-8  mr-20 ml-20 rounded-3xl'>
          <div className='w-2/5 flex ml-36 overflow-hidden  flex-col'>
             <div className='flex mt-10 ml-4 overflow-hidden gap-2'>
              <div className='bg-black w-8 p-2  rounded-2xl '></div>
             <div className='bg-gray-200 w-12 p-2 rounded-2xl  '></div>
             <div className='bg-black w-8 p-2  rounded-2xl '></div>
             <div className='bg-black w-8 p-2  rounded-2xl '></div>
             </div>

             <div className='mt-48'>
                <p className='text-gray-500 text-2xl'>TRENDING FANCYBAGS</p>
                <p className='text-4xl mt-4 font-bold '>Leather FancyBags</p>
                <p className='mt-4'>FancyBags are make of fine skin, fit for <br />everday use very strong and durable, shop now!</p>
             </div>
          </div>

          <div className='w-3/5 flex '>
              <img src={first} alt="" className='h-[550px] relative right-[50%]' />
              <img src={second} alt="" className='w-[800px] mr-10 mt-5 right-[50%] relative' />
          </div>
        </div> */}
    </div>
  )
}

export default Home