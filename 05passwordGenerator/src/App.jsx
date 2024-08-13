import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook 
  const PassRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "~!@#$%^&*{}|";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length); // Fixed calculation here
      pass += str.charAt(index);
    }

    setPassword(pass);

  }, [length, numberAllowed, characterAllowed]);

  const copyPasswordtoClipBoard = useCallback(()=>
    {
      PassRef.current?.select();
      window.navigator.clipboard.writeText();
    },[password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  return (
    <>
      <div className="main flex justify-center items-center rounded-2xl">
        <div className="flex justify-center items-center flex-col bg-slate-800 w-2/4 h-40 my-7">
          <h1 className="text-3xl"> Password Generator </h1>
          <div className="w-11/12 my-5">
            <input 
              type="text" 
              value={password} 
              placeholder="Password"
              className="w-4/5 py-2 px-4 shadow-lg text-blue-600 font-bold"
              readOnly
              ref={PassRef}
            />
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:border-2 mx-2"
            onClick={copyPasswordtoClipBoard}
            >
              Copy
            </button>
          </div>

          <div className="features w-11/12 flex items-center space-x-5">
            <input 
              type="range" 
              min={6} 
              max={100} 
              value={length} 
              className="length-input bg-blue-500" 
              onChange={(e) => setLength(parseInt(e.target.value))} 
            />
            <label>Length: {length}</label>

            <input 
              type="checkbox" 
              checked={numberAllowed} 
              onChange={(e) => setNumberAllowed(e.target.checked)} 
            />
            <label htmlFor="numberInput">Numbers</label>
            <input 
              type="checkbox" 
              checked={characterAllowed} 
              onChange={(e) => setCharacterAllowed(e.target.checked)} 
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
