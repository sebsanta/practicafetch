import { useState } from "react";

const ButtonCount = () => {
const [count, setCount] = useState(0);

const handleClick = () => {
setCount(count + 1);
}
    return(
            <button type='button' 
            className="btn btn-primary" 
            onClick={handleClick}> handle: {count}</button>
    )
}

export default ButtonCount;