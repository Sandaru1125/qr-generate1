import QRcode from 'qrcode'
import { useState } from 'react';
function App() {
const[url,setUrl]=useState('')
const[qrcode,setqrcode]=useState('')

const Generateqrcode=() => {

QRcode.toDataURL(url,(err,url)=>{
if(err) return console.error(err)

  console.log(url)
  setqrcode(url)

})

}

  return (
    <div className="app">
      <h1>My QR Code Genarator</h1>
      <br></br>
      <input type="text" placeholder="e.g. https://google.com" className="input" 
      value={url}
      onChange={(evt) => setUrl(evt.target.value)}

/>
      <button onClick={Generateqrcode}>Genarate</button>
      <img src={qrcode}/>
      <a href={qrcode} download="qrcode.png"  className='dawnlod'>Download</a>
    </div>
  );
}

export default App;
