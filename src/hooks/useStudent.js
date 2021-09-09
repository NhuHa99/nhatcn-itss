import React from "react"
const useStudent = () =>{
    const studentList = [
        {
            id: 1,
            username: "Huyen"
        },
        {
            id: 2,
            username: "Hoa"
        },
        {
            id: 3,
            username: "Hung"
        },
        {
            id: 4,
            username: "Long"
        }
    ];
    const [initStudentList, setInitStudentList] = React.useState([...studentList])
    const [newStudentList, setNewStudentList] = React.useState([...studentList])
    const deleteStudent = (username) => {
        const index = newStudentList.findIndex((item) => item.username === username)
        if (index > -1){
            newStudentList.splice(index, 1)
            setNewStudentList([...newStudentList])
        }
    }
    return [initStudentList, newStudentList, {deleteStudent}]
}
export default useStudent;