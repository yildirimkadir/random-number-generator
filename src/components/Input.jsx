import { useState } from "react";
import "./Input.css";

const Input = () => {
    const [maksi, setMaksi] = useState();
    const [mini, setMini] = useState();

    const [randomnumber, setRandomnumber] = useState();

    const handleChange = (e) => {
        setMaksi(+e.target.value)
    };

    const handleRandom = (() => {
         return setRandomnumber(Math.floor(Math.random() * (maksi - mini + 1) ) + mini);
        });
    
    // const handleShow = () => {
    //     setRandomnumber(handleRandom(mini, maksi));
    // }

    console.log(randomnumber);

  return (
    <>
    <div className="container">
        <div className="random">
        <p className="text">Random Number: <span>{randomnumber}</span></p>
        </div>
        <div className="minDiv">
        <p>Min:</p>
        <input className="min" type="number" onChange={(e) => setMini(+e.target.value)} />
        </div>
        <div className="maxDiv">
        <p>Max:</p>
        <input className="max" type="number" onChange={handleChange}/>
        </div>
        <button onClick={handleRandom}>Get Number</button>
    </div>
    </>
  )
}

export default Input