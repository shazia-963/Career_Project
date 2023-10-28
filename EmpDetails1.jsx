
import { useParams, Link } from "react-router-dom"
import "./Details1.css"
import { useState,useEffect } from "react"

function EmpDetails1() {
    const [data,setData]=useState(null)
  const {empid}=useParams()
    useEffect(()=>{
        //http://localhost:3000/Employee
       // fetch("http://localhost:3000/Employee/"+empid)
        fetch("https://kinara-rest-api.onrender.com/Employee/"+empid)
            .then((res)=>{
                return res.json()
            },[])
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })
        },)

    return (
        <div>
            <div className="container-fluid">
                <div className="card" style={{ width: "18rem" }}>
                    {data &&
                    <div className="card-body">
                        <h5 className="card-title">Emp Id: {data.id} </h5>    
                        <h6 className="card-subtitle mb-2 text-body-secondary">Emp Name: {data.name}</h6>
                        <p className="card-text">Emp City: {data.city}</p>
                        <p className="card-text">Emp Mobile: {data.mobile}</p>
                        {/* <a href="#" className="card-link">Back</a> */}
                        {/* <a href="#" className="card-link">Another link</a> */}
                        <Link to="/" className="btn btn-danger">Back</Link>
                    </div>
}
                </div>
            </div>
        </div>
    )
}
export default EmpDetails1;