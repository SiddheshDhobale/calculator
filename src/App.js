
import './App.css';
import {React, useState} from 'react';

function App() {
// eslint-disable-next-line
  const [result , setResult ] = useState('');
  
  const handleClick =(e)=>{
    //console.log(e.target.innerHTML);
    setResult(result.concat(e.target.innerHTML));
    // if(e.target.innerHTML === "AC")
    // {
    //     setResult('');
    // }else if(e.target.innerHTML === "C")
    // {
    //   setResult(result.slice(0,-1))
    // }
    console.log(result);
    console.log(result.length);
    
  }
  const Allclear =()=>{
    setResult('');
  }
  const clear=()=>{
    setResult(result.slice(0,-1))
  }
  const calculate =()=>{
    
      try{
        // eslint-disable-next-line
        setResult(eval(result));
      }catch{
        setResult("Error");
      }
      
  }

  return (
    <div className="App">
      <h1> Calculator</h1>
      <div className='CalCBody'>
        <div className='inputText my-3'>
          <input type='text' value={result} style={{fontSize:'50px',textAlign:'right'}} ></input>
        </div>
        <div className='buttons my-3'>
          <div className="row row-cols-5 g-1"> 
          {/* row row-cols-5 */}
             <button  type="button" className="col col-lg-2 btn btn-lg  btn-light" onClick={Allclear} >AC</button> 
             <button type="button" className="col  col-lg-2 btn btn-lg btn-light" onClick={clear}>C</button> 
             <button  type="button" className="col  col-lg-2 btn btn-lg btn-light" onClick={handleClick}>%</button> 
             <button  type="button" className=" col col-lg-2 btn btn-lg btn-warning" onClick={handleClick}>/</button> 
          </div>
          <div className="row row-cols-5 g-1">
             <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>7</button>
             <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>8</button>
             <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>9</button>
             <button type="button" className="col col-lg-2 btn btn-lg btn-warning" onClick={handleClick}>*</button>
          </div>
          <div className="row row-cols-5 g-1">
             <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>4</button>
            <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>5</button>
            <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>6</button>
            <button type="button" className="col col-lg-2 btn btn-lg btn-warning" onClick={handleClick}>-</button>
          </div>
          <div className="row row-cols-5 g-1">
          <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>4</button>
          <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>5</button>
          <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>6</button>
           <button type="button" className="col col-lg-2 btn btn-lg btn-warning" onClick={handleClick}>-</button>
          </div>
          <div className="row row-cols-5 g-1">
            <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>1</button>
            <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>2</button>
            <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>3</button> 
            <button type="button" className="col col-lg-2 btn btn-lg btn-warning" onClick={handleClick}>+</button> 
          </div>
          <div className="row row-cols-3 g-1">
            <button type="button" className="col  btn btn-lg btn-secondary" onClick={handleClick} style={{borderRadius:'50px'}}>0</button> 
            <button type="button" className="col col-lg-2 btn btn-lg btn-secondary" onClick={handleClick}>.</button> 
            <button type="button" className="col col-lg-2 btn btn-lg btn-warning" onClick={calculate}>=</button> 
        </div>
        </div>
      </div>
    </div>
  );
}

export default App; 
