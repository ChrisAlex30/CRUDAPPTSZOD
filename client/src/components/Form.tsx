import {  UserAdd } from '../types/types'

type propFunction={
  handleAdd:(user:UserAdd)=>void
  reset:()=>void
  user:UserAdd
  setUser:React.Dispatch<React.SetStateAction<UserAdd>>
  isEdit:{id:string,edit:boolean}
}

function Form ({handleAdd,reset,user,setUser,isEdit}:propFunction) {

  const handleTextChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSelectChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit=()=>{
    if(!user.name || !user.email || !user.gender || user.gender==="0"){
      alert("plz fill all fields")
      return
    }

    handleAdd(user)
  }

  

  return (
    <div className="col-lg-5 py-3 " >
    <h2 className="text-center alert alert-warning">Add Person</h2>
    <div className="mb-3 mt-5 ">
      <label className="form-label">First Name</label>
      <input type="text" value={user.name} onChange={handleTextChange} className="form-control" name='name'/>
    </div>
    <div className="mb-5 ">
      <label className="form-label">Last Name</label>
      <input type="text" value={user.email} onChange={handleTextChange} className="form-control" name='email'/>
    </div>
    <div className="mb-5 ">
      <label className="form-label">Gender</label>
      <select className="form-control"  value={user.gender} onChange={handleSelectChange} name="gender">          
          <option value="0">--Select</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
    </div>
    <div style={{
      textAlign:"center"
    }}>
      <button className="btn btn-danger mx-1" onClick={handleSubmit}> {isEdit.edit?"Update":"Submit"}</button>
      <button className="btn btn-success" onClick={reset}>Reset</button>
    </div>
  </div>
  )
}

export default Form