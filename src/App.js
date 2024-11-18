import { useState } from 'react';
import './App.css';

function App() {

  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [category,setCategory]=useState(null);

  
  const calculate=()=>{
    if(height && weight){
      const calbmi=(weight/(height*height)).toFixed(2);
      setBmi(calbmi)

      if(calbmi<18.5){
        setCategory("Underweight")
      }
    else if (calbmi >= 18.5 && calbmi < 24.9) {
      setCategory('Normal weight');
    } else if (calbmi >= 25 && calbmi < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  }
   else {
    alert('Please enter valid weight and height.');
  }
};

   
  return (
    <div >
      <h1 className='text-center mt-5 text-primary'>BMI CALCULATOR</h1>
      <div className='container'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4 border mt-5 bg-dark' style={{height:'400px'}}>
      
      <div className='mb-3  mx-5 my-5'>
        <input type="text" className='form-control' value={height} placeholder='Enter your height' onChange={(e)=>setHeight(e.target.value)}/>
        </div>
        <div className='mb-4 mx-5'>
        <input type="text" className='form-control' value={weight} placeholder='Enter your weight' onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <div className='mb-5 align-items-center justify-content-center d-flex'>
        <button type="button" className='btn btn-primary'onClick={calculate}>check bmi</button>
        </div>
        <div className='result'>
          <h3 className='align-items-center justify-content-center d-flex text-primary'>Your Bmi: {bmi}</h3>
          <h3 className='align-items-center justify-content-center d-flex text-primary'>Category: {category}</h3>
        </div>
   
      </div>
      <div className='col-md-4'></div>
      </div>
      </div>
    </div>
  );
}

export default App;
 