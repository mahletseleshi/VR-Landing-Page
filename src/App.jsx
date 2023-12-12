import logo from "./assets/logo.png";
import vr from "./assets/vr.png";

function App() {
  return (
    <div className="bg-[#160C6E] z-10 h-screen relative w-full basis-[100%] px-14 text-white">
      <nav>
        <img src={logo} alt="logo" />
      </nav>
  
      <div className="flex items-center justify-center w-full">
          <img src={vr} alt="vr" className=" w-[50%] z-10" />
      </div>

      <div className="flex items-center absolute w-[96%] pr-14 top-[30%] z-10 justify-between">
        <div>
        <ul className="text-gray-400 space-y-8 font-bold">
          <li className="text-white text-2xl">Gear Vr</li>
          <li>Design</li>
          <li>Display</li>
          <li>Experince</li>
          <li>Spec</li>
          <li>Gallery</li>
        </ul>
        </div>

        <div className="w- text-right flex flex-col justify-end items-end">
          <h1 className="text-[110px] font-extrabold ">GEAR VR</h1>
          <p className="w-[40%] text-sm font-bold mb-6 ">
            Its easy to get lost in the world of virtual reality because the
            Gear VR is engineered to feel lighter.
          </p>
          <button className="bg-gradient-to-r border-none outline-none text-sm px-6 py-4 rounded-full font-bold from-[#DF387C] to-[#FF602C]">Find more info</button>
        </div>
      </div>
      <div className="bg-[#3F21D0] h-screen w-[50%] shadow-lg absolute top-0 left-[25%] rounded-full items-center justify-center"></div>
      <div className="bg-gradient-to-t from-[#DF387C] to-[#FF602C] h-[70%] w-[35%] absolute shadow-xl top-[15%] left-[32%] rounded-full items-center justify-center"></div>
      <div className="bg-dots h-screen w-full flex items-center justify-center absolute top-0 left-0 z-50 "></div>
    </div>
  );
}

export default App;
