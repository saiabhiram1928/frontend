import React from 'react'
import Form from '../../../Form/Form';

const ModalBody = (props) => {

  return (

 
    <div class="flex flex-wrap -m-4  bg-white rounded-lg ">
      <div class="w-full p-4">
        <div class=" p-6 rounded-lg">
          <div class="w-full h-10 inline-flex items-center justify-center mb-4 text-xl text-gray-800">
            {props.annoucement.club_name}
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{props.annoucement.title}</h2>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{props.annoucement.department}</h2>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{props.annoucement.study_year}</h2>
          <p class="leading-relaxed text-base"> {props.annoucement.info} </p>
          <div className="collapse">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
    Click to register
  </div>
  <div className="collapse-content"> 
    <Form id={props.annoucement}/>
  </div>
</div>
        </div>
      </div>
      </div>
      

  )
}

export default ModalBody