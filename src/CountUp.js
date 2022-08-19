import { useState, useEffect } from "react";

const useStopwatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useStopwatch useEffect");
    const interval = setInterval(() => {
    console.log(`Count = ${count}`);
     
    setCount((prev) => 
        prev === 300 ? prev = 300 : prev + 1);          
    }, 10);
    // setCount((prev) => 
    //     prev + 1;          
    // }, 10); it will count at infinite
    return () => clearInterval(interval);
  }, [count]);

  return count;
};

function CountUp() {
  const count = useStopwatch();
  console.log("App rendering");


  //const [count2, setCount2] = useState(0);

  //below is an example of how less manageble will be the code without setInterval

  // useEffect(() => {
  //   setCount2((prev) => 
  //  prev + 1);          
  // }, [count2]);

  return (
    <div>
      <div>Count up</div>
      <div>Count: {count}</div>
      
      {/* <div>Count2: {count2}</div> */}
    </div>
  );
}

export default CountUp;