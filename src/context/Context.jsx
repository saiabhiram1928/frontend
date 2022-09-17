import React,{useState,useEffect,createContext} from 'react'


const Annoucement_Context=createContext()
const Context = ({children}) => {
   const [annoucement, setAnnoucement] = useState([])
   
   const [loading, setloading] = useState(true)
  
   useEffect(() => {
     fetchData();
   
   }, [])
   
   const fetchData=async()=>{
    const data=await fetch("http://localhost:5000/Announcements?_sort=id&order=desc")
    const datafetch=await data.json()
    setAnnoucement(datafetch);
    
    setloading(false);
  }
  const submitData = async(d) => {

    const data= await fetch("http://localhost:5000/FormData",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
    
      body:JSON.stringify(d),
      
    
    })
    console.log(d)
   
  }
  return (
    <div>
        <Annoucement_Context.Provider value={{annoucement,loading,submitData}}>
                  {children}
            </Annoucement_Context.Provider>


    </div>
  )
}

export default Context
export {Annoucement_Context}