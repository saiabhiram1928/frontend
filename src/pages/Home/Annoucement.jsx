import React,{useState} from 'react'
import Modal from './Modal/Modal';
import ModalBody from './Modal/ModalBody';

const Annoucement = (props) => {
    const [isModal, setIsModal] = useState(false)

 const handlemodal=()=>{
    
  setIsModal(true);
 }
 
       
  return (
    <div class="flex flex-wrap -m-4 ">
        <div class="p-4 w-full">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div class="w-full h-10 inline-flex items-center justify-center mb-4 text-xl text-gray-800">   
{props.annoucements.club_name}
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{props.annoucements.title}</h2>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{props.annoucements.department}</h2>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{props.annoucements.study_year}</h2>
            <button className="btn btn-ghost" onClick={handlemodal}>Learn More</button>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
           <Modal show={isModal} close={()=>setIsModal(false)}>
 <ModalBody annoucement={props.annoucements}/>
           </Modal>
          </div>
        </div>
        </div>

  )
}

export default Annoucement
