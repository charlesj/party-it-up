import React, { useState } from 'react';
import './App.css';
import { processImage } from './processImage'

const App = () => {
  const [userFile, updateUserFile] = useState()
  const [outputFile, updateOutputFile] = useState()

  const receiveFile = (e) => {
    let file = e.target.files[0];
    console.log(file); //I can see the file's info
    // reader.onload = () => {
    //   var array = new Uint32Array(reader.result)
    //   var binaryString = String.fromCharCode.apply(null, array);
    //   updateUserFile(array)
    // }
    // reader.readAsArrayBuffer(file)
    updateUserFile(file)
  }

  const startProcessing = () => {
    processImage(userFile, {}, updateOutputFile)
  }

  console.log('userFile', userFile)
  return (
    <div>
      <header className="header">
        <h1>Party It Up</h1>
        <p>Take a photo and make it party.</p>
      </header>
      <hr />
      <div>
        <ol>
          <li>
            <p>Choose a photo</p>
            <div><input type='file' onChange={receiveFile} /></div>
            <div className='uploaded_file'>{userFile && <img alt='uploaded file' src={URL.createObjectURL(userFile)} />}</div>
          </li>
          <li>
            <p>Choose Options</p>

          </li>
          <li>
            <p>Party!</p>
            {userFile && <button onClick={startProcessing}>Party It Up</button>}
            {outputFile && <img alt='output' src={outputFile} />}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
