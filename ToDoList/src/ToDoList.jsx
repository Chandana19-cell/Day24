import { useState } from "react"

function ToDoList() {
    const [activityname, setactivityname] = useState();
    const [activitydesc, setactivitydesc] = useState();
    const [listvals, setListvals] = useState([])
    const [status, setStatus] = useState("Action Req")

    function addActivity() {
        // setListvals([...listvals, activity]);
        // console.log(listvals)
        const newlist = { name: activityname, description: activitydesc, Status: status };
        setListvals((prevlist) => {
            // const newlist = [...listvals, activityname]
            const newarrlis = [...prevlist, newlist]

            console.log(newarrlis)
            return newarrlis
        })
        setactivityname("")
        setactivitydesc("")
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

            <input type="text" placeholder="ToDo Name" value={activityname} onChange={(e) => {
                setactivityname(e.target.value);
                // { console.log(activity) }
            }} />
            <input type="text" placeholder="ToDo Description" value={activitydesc} onChange={(e) => {
                setactivitydesc(e.target.value);
                // { console.log(activity) }
            }} />
            <button className="btn btn-primary" onClick={addActivity}>Add to List</button>
            <h2>Here is your ToDo list : </h2>
            <div className="card">
                <div className="card-body">
                    {(listvals.length != 0) ? (listvals.map((data, i) => {
                        return (
                            <>
                                <p key={i}>
                                    <div
                                        style={{
                                            backgroundColor: "while",
                                            whiteSpace: "normal",
                                            flexWrap: "wrap",
                                            display: "flex"

                                        }}

                                    >Name : {data.name}</div>
                                    <br />
                                    <div
                                        style={{
                                            backgroundColor: "while",
                                            whiteSpace: "normal",
                                            display: "flex",
                                            flexWrap: "wrap"

                                        }}

                                    >Description : {data.description}</div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {status}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#" onClick={() => setStatus("Not Completed")}>Not Completed</a></li>
                                            <li><a className="dropdown-item" href="#" onClick={() => setStatus("Completed")}>Completed</a></li>
                                        </ul>
                                    </div>
                                    <button onClick={() => { removeactivity(i) }}>Remove</button>
                                </p>
                            </>
                        )
                    })) : <p>List is Empty :</p>}
                </div>
            </div>
            {listvals.length != 0 && < button className="removeall" onClick={removeall}>Remove All</button>}
        </div>
    )

}

export default ToDoList