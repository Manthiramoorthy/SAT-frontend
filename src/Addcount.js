import { useState } from "react";

function AddCount() {
    console.log("ProductList rendered");
    let [count, setCount] = useState(0);
    function addCount() {
        setCount(count + 1);
        console.log("Count: ", count)
    }
    return (
        <div className="row">
            <button onClick={addCount} className=" col-4 btn btn-primary m-5">Add count</button>
            <h1>{count}</h1>
        </div>
    )
}

export default AddCount;