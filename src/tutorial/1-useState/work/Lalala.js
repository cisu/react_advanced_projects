import React,{useState} from 'react'

const Lalala = () => {


    const [count, setCount] = useState(0);

    function plus () {
        setCount(count+1)
    }

    function minus () {
        setCount(count-1)
    }

    return (
        <React.Fragment>
            <h1>{count}</h1>
            <button className="btn" onClick={plus}>+</button>
            <button className="btn" onClick={minus}>-</button>
        </React.Fragment>
    )
}

export default Lalala
