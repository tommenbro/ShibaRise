import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-lightBlue w-full h-screen absolute">
        <div className="w-screen h-full flex flex-col justify-center items-center p-4 ">
          <div className="items-center justify-center text-center">
            <p className="text-white text-xl pb-12">
              Contract address:{" "}
              <span className="text-xl">
                0x50dc7b26d869033330f31d155131330f7541063b
              </span>
            </p>
            <a
              href="https://poocoin.app/tokens/0x50dc7b26d869033330f31d155131330f7541063b"
              rel="noreferrer"
              target="_blank"
              className="p-4"
            >
              <button className="bg-darkBlue hover:bg-midBlue text-white p-6 text-xl font-semibold rounded-2xl w-[200px] mb-4">
                TRADE NOW
              </button>
            </a>
            <a
              href="https://t.me/ShibaRise_Official"
              rel="noreferrer"
              target="_blank"
              className="p-4"
            >
              <button className="bg-darkBlue hover:bg-midBlue text-white p-6 text-xl font-semibold rounded-2xl w-[200px] ">
                TELEGRAM
              </button>
            </a>
          </div>
          <img src="shibrise.jpg" width="500px" alt="shibrise" />
          <p className="text-xl text-white">
            The Shiba that just keeps on rising
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
