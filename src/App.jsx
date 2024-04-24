
import './App.css'
import Banner from './Banner/Banner'
import Card1 from './Card1/Card1'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

function App() {


  return (
    <>
      <div className=''>
      <Navbar></Navbar>
        <div className='max-w-[1500px] mx-auto'>
           <Banner></Banner>
           <Card1></Card1>
        </div>
        <Footer></Footer>
        
      </div>
    
    </>
  )
}

export default App
