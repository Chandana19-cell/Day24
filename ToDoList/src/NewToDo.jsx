import { useState } from "react";

function NewTodo() {
    const [vals, setvals] = useState("");
    const [arrvals, setarrvals] = useState([]);

    function addElement() {
        // setarrvals([...arrvals, vals])
        setarrvals(() => {
            const newarr = [...arrvals, vals]
            console.log(newarr)
            return newarr;
        })
        setvals("")

    }

    function Remvefromlist(i) {
        const newlist = arrvals.filter((ele, id) => {
            return i != id
        })
        setarrvals(newlist)
    }

    function Removeall() {
        setarrvals([])
    }

    return (

        <div>
            <input type="text" value={vals} onChange={(e) => { setvals(e.target.value) }} />
            <button onClick={addElement}>Add to List</button>
            {
                arrvals != [] && arrvals.map((data, i) => {
                    return (
                        <>
                            <div key={i}>
                                <div>{data}</div>
                                <button onClick={() => Remvefromlist(i)}>Remove from list</button>
                            </div>
                        </>
                    )
                })
            }
            {arrvals.length > 0 && <button onClick={() => { Removeall() }}>Remove all</button>}
        </div>


    )

}


export default NewTodo;