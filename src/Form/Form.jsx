import React,{useContext} from 'react'
import {Annoucement_Context} from '../context/Context'
import Text_box from './Text_box'

const Form = (props) => {
    const {formData,formloding} = useContext(Annoucement_Context)
    console.log(props);
    const data = Object.keys(formData[props.id.id-1]);
   

    if(formloding===false){
  return (
    <div>
        <form>
 {
     data.map((data)=>{
              
        return   <Text_box text_data={data}/>
      })
 }
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    </div>
  )
}else{
    return(
        <h1>Loading....</h1>
    )
}
}

export default Form