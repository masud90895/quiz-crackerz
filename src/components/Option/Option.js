import React from 'react';
import Swal from 'sweetalert2'

const Option = ({option,correctAnswer,setRight,setwrong,right,wrong}) => {
    const showIsCorrect=(option)=>{
        if(correctAnswer===option){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your Answer Is Correct',
                showConfirmButton: false,
                timer: 1500
              })
              setRight(right + 1)
        }else{
            setwrong(wrong + 1)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Not Correct..Try Again',
                timer: 1500
              })
        }
    }
    return (
        <div className='md:w-2/3 w-full h-22 mb-2 border border-violet-500 rounded-lg text-xl pt-2'
       
        >
            <input  onClick={()=>showIsCorrect(option)} type="radio" id={option} name="fav_language" value={option}/>
            <label forhtml={option}>{option}</label>
        </div>
    );
};

export default Option;