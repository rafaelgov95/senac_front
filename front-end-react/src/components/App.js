import "../css/style.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import {useState} from "react"

async function getLogin(){

}

export default function App() {  
  const [userForm,setUserForm]=useState({name:'',password:''})
  let content;
  let isLogin=true
  getLogin(userForm).then(user=>{

  })

  if (isLogin){
    content=
    <Dashboard/>
  }else{
    content= 
    <Login/>
  }
  return (
    
      <div>
        {content}    
      </div>
    
  );
}
