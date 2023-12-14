import React from "react";

function Tockenomics() {
  return (
    <div className="flex  flex-col bg-[#0F0C1D] text-white pt-5">
      <div className="flex flex-col text-center">
        <h1 className="underline-offset-2">TOKENOMICS</h1>
        <div className="w-40 h-[1px] bg-[#A40A0A] mx-auto"> </div>
        <h1 className="text-3xl font-bold mt-3">ACN Tokenomics</h1>
        <p className="text-[#8B86A2] mt-9 tracking-wide text-sm">
          Tokenomics has been calculated and considered according to the needs
          of each <br /> utility available.
        </p>
      </div>
      <div className="supply flex justify-center gap-24 flex-wrap p-16">
        <div>
          <h3>100M</h3>
          <p>Total Supply</p>
        </div>
        <div>
          <h3>90M</h3>
          <p>Circulating Supply</p>
        </div>
        <div>
          <h3>1M</h3>
          <p>Max Transactions</p>
        </div>
        <div>
          <h3>5%</h3>
          <p>Tax</p>
        </div>
      </div>
      <div className="m-9 text-left flex flex-col items-center">
        <h3 className="font-bold text-xl ">
          Anonym Chain <span className="text-red-700"> Consensus</span>
        </h3>
        <p className="mt-3 text-[#4C485F] tracking-wide whitespace-normal">
          With some consideration and calculation for blockchain consensus from
          Anonym <br /> Chain using POS (Proof of Stake). Which will be sustainable <br />
          with several available utilities
        </p>
      </div>
      <div className="card flex  justify-center gap-6 flex-wrap">
        <div className="card1 flex flex-col p-4 border-2 border-slate-50 w-64 h-40 ">
          <div className="flex gap-10 pb-3">
            <img
              className="h-7 w-7 ml-3 mt-3"
              src="https://assets-global.website-files.com/61389177f5eab433827f7185/62fa216c0045ed4ad05192ba_USD Coin (USDC).svg"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-extrabold">ANC</h1>
              <h3 className=" text-red-700">USDC</h3>
            </div>
          </div>
          <div className="flex gap-10 text-sm">
            <div>
              <p className="uppercase text-sm">fixed rate </p>
              <span>TBA</span>
            </div>
            <div>
              <p className="uppercase ">variable rate </p>
              <span>TBA</span>
            </div>
          </div>
          <button className="text-red-700 bg-white rounded-sm mt-1 text-sm h-20 w-16">
            STAKE
          </button>
        </div>
        <div className="card2 flex flex-col p-4 border-2 border-slate-50 w-64 h-40 ">
          <div className="flex gap-10 pb-3">
            <img
              className="h-7 w-7 ml-3 mt-3"
              src="https://assets-global.website-files.com/61389177f5eab433827f7185/62fa216c0045ed4ad05192ba_USD Coin (USDC).svg"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-extrabold">ANC</h1>
              <h3 className=" text-red-700">USDC</h3>
            </div>
          </div>
          <div className="flex gap-10 text-sm">
            <div>
              <p className="uppercase text-sm">fixed rate </p>
              <span>TBA</span>
            </div>
            <div>
              <p className="uppercase ">variable rate </p>
              <span>TBA</span>
            </div>
          </div>
          <button className="text-red-700 bg-white rounded-sm mt-1 text-sm h-20 w-16">
            STAKE
          </button>
        </div>
        <div className="card3 flex flex-col p-4 border-2 border-slate-50 w-64 h-40 ">
          <div className="flex gap-10 pb-3">
            <img
              className="h-7 w-7 ml-3 mt-3"
              src="https://assets-global.website-files.com/61389177f5eab433827f7185/62fa216c0045ed4ad05192ba_USD Coin (USDC).svg"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-extrabold">ANC</h1>
              <h3 className=" text-red-700">USDC</h3>
            </div>
          </div>
          <div className="flex gap-10 text-sm">
            <div>
              <p className="uppercase text-sm">fixed rate </p>
              <span>TBA</span>
            </div>
            <div>
              <p className="uppercase ">variable rate </p>
              <span>TBA</span>
            </div>
          </div>
          <button className="text-red-700 bg-white rounded-sm mt-1 text-sm h-20 w-16">
            STAKE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tockenomics;
