import React,{useState,useEffect,createContext} from 'react'


const Annoucement_Context=createContext()
const Context = ({children}) => {
   const [annoucement, setAnnoucement] = useState([])
   const [formData, setFormData] = useState([])
   const [loading, setloading] = useState(true)
   const [formloding , setformloding] = useState(true)
   useEffect(() => {
     fetchData();
     fetchFormData();
   }, [])
   
   const fetchData=async()=>{
    const data=await fetch("http://localhost:5000/Announcements?_sort=id&order=desc")
    const datafetch=await data.json()
    setAnnoucement(datafetch);
    
    setloading(false);
  }
  const fetchFormData=async()=>{
    const data=await fetch("http://localhost:5000/Form?_sort=id&order=desc")
    const datafetch=await data.json()
    setFormData(datafetch);
    setformloding(false);
  }
  return (
    <div>
        <Annoucement_Context.Provider value={{annoucement,loading,formData,formloding}}>
                  {children}
            </Annoucement_Context.Provider>


    </div>
  )
}

export default Context
export {Annoucement_Context}