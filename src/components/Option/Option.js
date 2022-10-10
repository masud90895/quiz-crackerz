import React from 'react';

const Option = ({option}) => {
    return (
        <div className='w-2/3 h-22 mb-2 border border-gray-600 rounded-lg text-xl pt-2'>
            <input type="radio" id={option} name="fav_language" value={option}/>
            <label forhtml={option}>{option}</label>
        </div>
    );
};

export default Option;