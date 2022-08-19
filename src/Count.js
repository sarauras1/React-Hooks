import React, {useState} from 'react'

function Count() {
  const [count, setCount] = useState(1)
  const [{count2, count3}, setCountObject] = useState({count2: 2, count3: 3})
  return (
    <div>
      {/* single button state */}
    <button onClick={() => setCount(count + 1)}>+</button>
    <div>{count}</div>
       {/* Object */}
    <button onClick={() => setCountObject(prev =>
      ({
      //  with out ...prev the value will reset
      ...prev, 
       count2: prev.count2 +1,
       count3: prev.count3 +1}))}
       >+</button>
    <div>{count2}</div> 
    <div>{count3}</div>
    </div>
  );
}

export default Count;