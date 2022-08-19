//with this component we see a pratical example on how to use useEffect to dinamically
//update the dom, with out it the 
//dom would not update on resize but just if refresh the page

import React, {useState, useEffect} from "react";

export default function ResizeWindow(){
const [windowWidth, setWindowWidth] = useState(window.innerWidth)

const handleResize = () => {
    setWindowWidth(window.innerWidth)
}

useEffect(() => {
    window.addEventListener('resize', handleResize)
}, [])
return(
    <div>{windowWidth}</div>
)
}