import {useState} from "react"
import useStudent from "../hooks/useStudent"
function ListStudents() {
    const [username, setUserName] = useState("")
    const [initStudentList,newStudentList,handleFunction] = useStudent()
    return (
        <div style={{width:"20%", margin:"5%", fontSize: "18px"}}>
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                <h4>{"学生一覧 :"} &nbsp;</h4>
                <div>[{initStudentList.map((item) => {
                    return item.username
                }).join(", ")}]</div>
            </div>
            <h3>{"削除する名前を入力してください。"}</h3>
            <br />
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                <input value={username} onChange={(event) => setUserName(event.target.value)} id="name" style={{padding:"5px", marginLeft: "30px"}}/>
            </div>
            <br />
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline", justifyContent: "flex-end"}}>
                <button onClick={()=>{handleFunction.deleteStudent(username)}} style={{padding:"5px"}}>{"確定"}</button>
            </div>
            <br />
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                <h4>{"削除する名前 :"}&nbsp;</h4>
                <span>{username}</span>
            </div>
            <br />
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                <h4>{"新しい一覧 :"} &nbsp;</h4>
                <div>[{newStudentList.map((item) => {
                    return item.username
                }).join(", ")}]</div>
            </div>
        </div>
    );
}
export default ListStudents