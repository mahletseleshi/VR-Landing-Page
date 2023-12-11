import logo from "./assets/logo.png"
import vr from "./assets/vr.png"


function App() {
  return (
   <div className="bg-[#160C6E] h-screen w-full relative">
    <div className="bg-[#3F21D0] rounded-full flex items-center justify-center h-screen w-[50%] mx-auto">
     <div className="bg-[#DF387C] rounded-full flex items-center h-[50%] w-[50%] ">
         <nav>
      <img src ={logo} alt="logo" className="w-fit absolute top-5 left-5"/>
    </nav> 
      <img src ={vr} alt="vr" className="w-[199%]"></img>
     </div>
    </div>
   </div>
  )
}

export default App
