import { useState } from "react";

const ButtonCount2 = () => {
    const [count, setCount] = useState(0);
    const handleContar = () => {
        setCount(count+1);
    }
    return (
<div>
    <h1>Contador</h1>
    <button onClick={handleContar}>Contando: {count}</button>
</div>
    )
}

export default ButtonCount2;