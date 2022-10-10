import React from 'react';
import Swal from 'sweetalert2'

const Option = ({option,correctAnswer}) => {
    const showIsCorrect=(option)=>{
        if(correctAnswer===option){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your Answer Is Correct',
                showConfirmButton: false,
                timer: 1500
              })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Not Correct..Try Again',
                timer: 1500
              })
        }
    }
    return (
        <div className='md:w-2/3 w-full h-22 mb-2 border border-gray-600 rounded-lg text-xl pt-2'
       
        >
            <input  onClick={()=>showIsCorrect(option)} type="radio" id={option} name="fav_language" value={option}/>
            <label forhtml={option}>{option}</label>
        </div>
    );
};

export default Option;