 
import './App.css'
import Linechart from './assets/component/line-chart/linechart'
import Navbar from './assets/component/navbars/navbar'
import Priceoptions from './assets/component/price-options/priceoptions'

function App() {
   

  return (
    <>
      
       <div>
       <Navbar></Navbar>
        <Priceoptions></Priceoptions>
        <Linechart></Linechart>
       </div>
      
    
    </>
  )
}

export default App
