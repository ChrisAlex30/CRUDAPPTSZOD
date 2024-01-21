import Form from '../components/Form'
import Display from '../components/Display'
import { useEffect, useState } from 'react'
import { User } from '../types/types'
import { UserAdd } from '../types/types'





const Dashboard = () => {
    const [users,setUsers] =useState<User[] | null>(null)
    const [read,setRead] =useState(true)
    const [user,setUser]=useState<UserAdd>({
        name:"",
        email:"",
        gender:""
      })
    
    const[isEdit,setIsEdit]= useState({
        id:"",
        edit:false
    })

    const getData=async ()=>{      
        const response = await fetch("http://localhost:1221/users/api/readUsers");      
        if (!response.ok) {        
          const data=await response.json()       
          alert(data.msg);
          return
        }
        const data=await response.json()
        setUsers(data)       
  }

    useEffect(()=>{
        if(read){
            getData()
            setRead(false)
        }

    },[read])

    const reset=()=>{
        setUser({
            name:"",
            email:"",
            gender:""
        })
        setIsEdit({
            id:"",
            edit:false
        })
    }
    const setEdit=(user:User)=>{
        setIsEdit({
            id:user._id,
            edit:true
        })
        setUser({
            name:user.name,
            email:user.email,
            gender:user.gender
        })
    }
    const handleAdd=async(UserAdd:UserAdd)=>{
        if(isEdit.edit){
            const response = await fetch(`http://localhost:1221/users/api/updateUser/${isEdit.id}`,{
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body:JSON.stringify(UserAdd)
              });
              const data=await response.json() 
              if(!response.ok){
                alert("Server Error")
              }
              alert(data.msg);
        }
        else{
            const response = await fetch("http://localhost:1221/users/api/createUser",{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body:JSON.stringify(UserAdd)
              });
              const data=await response.json() 
              if(!response.ok){
                alert("Server Error")
              }
              alert(data.msg);
        }
          getData()
          reset()      
    }

    const handleDelete=async (id:string)=>{
        if(confirm("Are You Sure!!!")){
            const response = await fetch(`http://localhost:1221/users/api/deleteUser/${id}`,{
                method: "DELETE"
              });
              const data=await response.json() 
              if(!response.ok){
                alert("Server Error")
              }
              alert(data.msg);
              getData()
        }      
    }

    
return (
        <div className="container">
            <h3 className="alert alert-info mt-5 text-center fw-bold w-50 mx-auto">CRUD USING NODE|REACT|TYPESCRIPT|MONGODB </h3>
            <div className="row p-3 rounded-3 border border-3">
            <Form handleAdd={handleAdd} reset={reset}  user={user} setUser={setUser} isEdit={isEdit}/>
            <Display users={users} setEdit={setEdit}  handleDelete={handleDelete} />
        </div>
</div>
)
}

export default Dashboard