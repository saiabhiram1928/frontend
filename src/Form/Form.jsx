import React,{useContext,useState} from 'react'
import {Annoucement_Context} from '../context/Context'


const Form = (props) => {
  const {submitData}=useContext(Annoucement_Context)
  const [mail, setMail] = useState("")
  const [regno, setRegno] = useState("")
  const [rollno, setRollno] = useState("")
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
const handlemail=(e)=>{
  setMail(e.target.value)
}
const handlereg=(e)=>{
  setRegno(e.target.value)
}
const handlroll=(e)=>{
  setRollno(e.target.value)
}
const handlname=(e)=>{
  setName(e.target.value)

}
const handletel=(e)=>{
  setTel(e.target.value)
}
const handlesubmit=(e)=>{
e.preventDefault()
const data={
  mail:mail,
  name:name,
  reg_no:regno,
  roll_no:rollno,
  phone:tel

}
submitData(data)
setMail("")
setName("")
setRegno("")
setRollno("")
setTel("")
}
  return (
    <div>
       
<form onSubmit={handlesubmit}>
  <div class="relative z-0 mb-6 w-full group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={mail} onChange={handlemail}/>
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 mb-6 w-full group">
      <input type="text" name="reg_no" id="reg_no" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={regno} onChange={handlereg} />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">reg no</label>
  </div>
  <div class="relative z-0 mb-6 w-full group">
      <input type="text" name="rollno" id="roll no" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""value={rollno} onChange={handlroll}/>
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">roll no</label>
  </div><div class="relative z-0 mb-6 w-full group">
      <input type="text" name="rollno" id="roll no" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={name} onChange={handlname}/>
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
  </div>
  
  
    <div class="relative z-0 mb-6 w-full group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={tel} onChange={handletel}/>
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
  )

}

export default Form