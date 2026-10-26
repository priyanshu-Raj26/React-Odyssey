import { useState, useCallback, useRef } from "react";

function generatePassword(length, numberAllowed, characterAllowed) {
  let password = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (numberAllowed) str += numbers;
  if (characterAllowed) str += specialChars;

  for (let i = 0; i < length; i++) {
    const char = Math.floor(Math.random() * str.length);
    password += str.charAt(char);
  }

  return password;
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState(() =>
    generatePassword(8, false, false),
  );

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 49);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <h1 className="text-4xl text-center text-sky-300">
        Welcome to the Password Generator app
      </h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-8  py-4 my-8 text-orange-300 bg-gray-800">
        <h1 className="text-emerald-400 text-center my-3">Generate password</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-white text-orange-400"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={50}
              value={length}
              onChange={(e) => {
                const nextLength = Number(e.target.value);
                setLength(nextLength);
                setPassword(
                  generatePassword(nextLength, numberAllowed, characterAllowed),
                );
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                const nextNumberAllowed = !numberAllowed;
                setNumberAllowed(nextNumberAllowed);
                setPassword(
                  generatePassword(length, nextNumberAllowed, characterAllowed),
                );
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                const nextCharacterAllowed = !characterAllowed;
                setCharacterAllowed(nextCharacterAllowed);
                setPassword(
                  generatePassword(length, numberAllowed, nextCharacterAllowed),
                );
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
