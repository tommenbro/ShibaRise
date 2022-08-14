import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="bg-lightBlue w-full h-full overflow-x-hidden ">
        <div className="text-white font-medium text-md p-4 w-full items-center text-center justify-center bg-lightBlue hover:bg-midBlue transition-all duration-300 ">
          <div className="px-8 flex flex-col col-span-2 md:flex-row items-center justify-center">
            <a
              href="https://bscscan.com/address/0x50dc7b26d869033330f31d155131330f7541063b#code"
              rel="noreferrer"
              target="_blank"
              className="px-12 hover:text-lightBlue"
            >
              Contract Scan
            </a>
            <a
              href="https://bscscan.com/token/0x50dc7b26d869033330f31d155131330f7541063b"
              rel="noreferrer"
              target="_blank"
              className="px-12 hover:text-lightBlue"
            >
              Transactions
            </a>
            <a
              href="https://bscscan.com/token/0x50dc7b26d869033330f31d155131330f7541063b#balances"
              rel="noreferrer"
              target="_blank"
              className="px-12 hover:text-lightBlue hidden md:visible"
            >
              Holders
            </a>
            <a
              href="https://poocoin.app/rugcheck/0x50dc7b26d869033330f31d155131330f7541063b/dev-activity"
              rel="noreferrer"
              target="_blank"
              className="px-12 hover:text-lightBlue"
            >
              Dev Wallet
            </a>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x50dc7b26d869033330f31d155131330f7541063b"
              rel="noreferrer"
              target="_blank"
              className="px-12 hover:text-lightBlue"
            >
              PancakeSwap
            </a>
            <a
              href="https://poocoin.app/rugcheck/0x50dc7b26d869033330f31d155131330f7541063b"
              rel="noreferrer"
              target="_blank"
              className="px-12 hover:text-lightBlue"
            >
              PooCoin
            </a>
            <a
              href="https://charts.bogged.finance/?c=bsc&t=0x50dc7b26d869033330f31d155131330f7541063b"
              rel="noreferrer"
              target="_blank"
              className="px-12 hover:text-lightBlue"
            >
              BoggedFinance
            </a>
          </div>
        </div>
        <div className="w-screen h-full flex flex-col justify-center items-center p-2">
          <div className="items-center justify-center text-center m-4 md:my-12">
            <p className="text-white font-medium">Contract address: </p>
            <div className="flex flex-col justify-center items-center text-center bg-midBlue p-3 mb-4 md:mb-12 rounded-xl md:w-[600px] w-[340px] hover:scale-105 transition-all duration-300">
              <p className="text-white text-xs md:text-xl font-bold">
                0x50dc7b26d869033330f31d155131330f7541063b
              </p>
            </div>
            <a
              href="https://poocoin.app/tokens/0x50dc7b26d869033330f31d155131330f7541063b"
              rel="noreferrer"
              target="_blank"
              className="p-4"
            >
              <button className="bg-darkBlue hover:bg-midBlue text-white p-6 text-xl font-semibold rounded-2xl w-[200px] my-4 hover:scale-105 transition-all duration-300">
                BUY NOW
              </button>
            </a>
            <a
              href="https://t.me/ShibaRise_Official"
              rel="noreferrer"
              target="_blank"
              className="p-4"
            >
              <button className="bg-darkBlue hover:bg-midBlue text-white p-6 text-xl font-semibold rounded-2xl w-[200px] hover:scale-105 transition-all duration-300 ">
                TELEGRAM
              </button>
            </a>
          </div>
          <img src="shibrise.jpg" width="500px" alt="shibrise" />
          <p className="text-xl text-white pb-2">
            The Shiba that just keeps on rising
          </p>
          <div className="flex flex-col md:col-span-2 m-4">
            <div className="flex flex-col md:flex-row row-span-2">
              <div className="flex flex-row items-center justify-center m-2 bg-midBlue text-white w-[300px] h-[50px] text-center rounded-2xl  text-lg">
                <p>Rise trend upcoming 🔝💥🚀</p>
              </div>
              <div className="flex flex-row items-center justify-center m-2 bg-midBlue text-white w-[300px] h-[50px] text-center rounded-2xl  text-lg">
                <p>10% of supply burnt 🔥</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row row-span-2">
              <div className="flex flex-row items-center justify-center m-2 bg-midBlue text-white w-[300px] h-[50px] text-center rounded-2xl  text-lg">
                <p>Whales are communicating 🐋</p>
              </div>
              <div className="flex flex-row items-center justify-center m-2 bg-midBlue text-white w-[300px] h-[50px] text-center rounded-2xl  text-lg">
                <p>No calls, all organic so far 👀</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row row-span-2">
              <div className="flex flex-row items-center justify-center m-2 bg-midBlue text-white w-[300px] h-[50px] text-center rounded-2xl  text-lg">
                <p>Dev + HODLERS = ❤️</p>
              </div>
              <div className="flex flex-row items-center justify-center m-2 bg-midBlue text-white w-[300px] h-[50px] text-center rounded-2xl  text-lg">
                <p>Graphics update tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
