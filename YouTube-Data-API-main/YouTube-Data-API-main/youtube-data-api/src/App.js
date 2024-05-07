import React,{useState,useEffect} from 'react';

function App() {

  const [userInput,setUserInput]=useState('');

  const [finalUserInput,setFinalUserInput]=useState('');

  const [outputContainer,setOutputContainer]=useState();

  const [opc,spc]=useState();

  useEffect(()=>{
    fetchData();
  },[finalUserInput])

  const fetchData=()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f95540051dmsh5bc4447a53bc30dp1b09afjsn82cbb3fc60d3',
        'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
      }
    };
    
    fetch(`https://youtube-data8.p.rapidapi.com/video/details/?id=${userInput}&hl=en&gl=US'`, options)
      .then(response=>{
        return response.json();
      })
      .then(data=>{
        setOutputContainer(data.thumbnails)
        spc(data.avatar)
      
        console.log(data);
      })
      .catch(err => console.error(err));
  
  }
  

  const submitHandler=(event)=>{
    event.preventDefault();
    setFinalUserInput(userInput);
  }

  return (
    <div className="container mt-3">
    <form onSubmit={submitHandler} >
       <div className="mb-3 ">
          <input type="text" className="form-control" value={userInput} onChange={(event)=> setUserInput(event.target.value)}/>
       </div>
       <div className="container text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
       </div>
    </form>
    {outputContainer?
    outputContainer.map((item,index)=>
    <div class="video-container">
      <h1>{item.title}</h1>
      <img  height={item.height} width={item.width} src={item.url}></img>
  </div>
    ):<h2>Please Enter Something In The Input Field!!!</h2>
    }
        {opc?
    opc.map((item,index)=>
    <div class="video-container">
      <h1>{item.title}</h1>
      <img  height={item.height} width={item.width} src={item.url}></img>
  </div>
    ):<h2>Please Enter Something In The Input Field!!!</h2>
    }
 </div>
  );
}

export default App;
