import React,{useState} from "react";
import { FiAlignRight } from "react-icons/fi";
import img from "../assets/img.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav className="flex justify-between bg-transparent">
        <div className="flex gap-7 p-7">
          <img src={img} alt="logo" className="nav-logo w-8 h-8"/>
          <p className="nav-text pt-2 text-sm "> ETH : 0XDE3AE6F3458DB211D298DA97FDCF13B6C1C8C87F </p>
        </div>
        <ul className="navbar-menu flex gap-5 p-9 text-sm">
          <li>ANONYM CHAIN</li>
          <li>TOKENOMICS</li>
          <li>ROADMAP</li>
          <li><select name="apps" id="apps" className="flex text-center bg-[#0F0C1D] text-white"> 
            <option value="ANON" > Apps </option>
            <option value="ANON"> ANON Wallet</option>
            <option value="ANON"> ANON Wallet</option>
            <option value="ANON"> ANON Wallet</option>
          </select></li>
          <li>PARTNERSHIPS</li>
          <li><button> Anon Wallet </button></li>
        </ul>
        <div className="nav-btn pt-5 pr-3" onClick={() => {setShow(!show);}}> <FiAlignRight /></div>
      </nav>
      { show && (
        <div className="nav-mob hidden">
          <nav className="flex flex-col list-none text-center gap-3 tracking-widest text-xl">
            <li> Home </li>
            <li> Today </li>
            <li> Latest </li>
            <li> Contect Us </li>
          </nav>  
        </div>
      )}
    </div>
  );
};

export default Navbar;
