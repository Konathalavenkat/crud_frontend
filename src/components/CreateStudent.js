import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from 'axios';

function Createstudent() {
    const [arr, setArr] = useState([])

    const getState = (childData) => {
        setArr(childData)
    }
    const handleSubmit = () => {
        const data = {name: arr[0], email: arr[1], rollNo: arr[2]}
        Axios.post("https://crud-glkk.onrender.com/studentdetails/create-student", data)
        .then((res) => {
            if(res.status === 200) alert("Record added successfully")
            else Promise.reject()
        })
        .catch((err) => {alert(err)})
    }
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
                    nameValue=""
                    emailValue=""
                    rollNoValue="">
                Create Student
            </StudentForm>
        </form>

 )
}
export default Createstudent;
