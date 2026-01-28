import React, { useEffect,useState } from 'react'

const State = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("from useEffect")
  },[count])
  const[like,setLike]=useState(0)
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Like:{like} </h1>
    
      
      <button onClick={() => setCount(count + 1)}> Increment
      </button>
        <button onClick={()=>setLike(like+1)}>Like</button>
         <button onClick={()=>setLike(like-1)}>disLike</button>
      
       
    </div>
  )
}

export default State
