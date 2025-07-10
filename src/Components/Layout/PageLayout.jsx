import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const PageLayout = ({isCartOpen, setIsCartOpen}) => {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default PageLayout