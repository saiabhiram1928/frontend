import React,{useContext} from 'react'
import {Annoucement_Context} from '../../context/Context';
import Annoucement from './Annoucement';

const Home = () => {
   const {annoucement,loading} = useContext(Annoucement_Context)

   if(loading===false){

  return (
    <section class="text-gray-600 body-font border-2 border-red-500">
    <div class="container px-5 mx-auto">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Announcements</h1>
        {/* search bar */}
      </div>
      {
                annoucement.map((annoucement)=>{
              
                  return   <Annoucement annoucements={annoucement} loading={loading} key={annoucement.id}/>
                })
            }
      
      </div>
        </section>
  )
        }else{
            return (
                <h1>loading...</h1>
            )
        }
}

export default Home