import { User, UserAdd } from '../types/types'

type propFunction={
    users:User[] | null
    setEdit:(User:User)=>void
    handleDelete:(id:string)=>void
  }

export default function Display({users,setEdit,handleDelete}:propFunction){

 const handleEdit=(user:User)=>{
    setEdit(user)
 }

  return (
    <div className="col-lg-7 py-3 text-center">
    <h2 className="text-center alert alert-warning">Person Details</h2>

    <table className="table table-stripped rounded-3">
        <thead>
      <tr style={{
        backgroundColor:"aliceblue"
      }}>       
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        {
            users?.map((user)=>{
                return (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>
                        <button className="btn btn-danger mx-1" onClick={()=>handleEdit(user)} > Edit</button>
                         <button className="btn btn-warning" onClick={()=>handleDelete(user._id)}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
      </tbody>
    </table>
  </div>
  )
}

