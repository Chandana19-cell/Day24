import { useState } from "react"

function ToDoList() {
    const [activity, setactivity] = useState("");
    const [listvals, setListvals] = useState([])

    function addActivity() {
        // setListvals([...listvals, activity]);
        // console.log(listvals)
        setListvals(() => {
            const newlist = [...listvals, activity]
            console.log(newlist)
            return newlist
        })
        setactivity("")
    }

    function removeactivity(i) {
        const updatedlist = listvals.filter((ele, id) => {
            return i != id;
        })
        setListvals(updatedlist)
    }

    function removeall() {
        setListvals([])
    }

    return (
        <div className="container">
            <h1>To Do List</h1>
            <div>ToDoList</div>
            <input className="form-control" type="text" placeholder="Add activity here" value={activity} onChange={(e) => {
                setactivity(e.target.value);
                // { console.log(activity) }
            }} />
            <button className="btn btn-primary" onClick={addActivity}>Add to List</button>
            <h2>Here is your ToDo list : </h2>
            {(listvals.length != 0) ? (listvals.map((data, i) => {
                return (
                    <>
                        <p key={i}>
                            <div
                                style={{
                                    backgroundColor: "while"

                                }}

                            >{data}</div>
                            <button onClick={() => { removeactivity(i) }}>Remove</button>
                        </p>
                    </>
                )
            })) : <p>List is Empty :</p>}
            {listvals.length != 0 && < button className="removeall" onClick={removeall}>Remove All</button>}
        </div>
    )

}

export default ToDoList