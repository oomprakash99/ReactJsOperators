import {useState} from 'react';


function Op(){
    
    const [data,updateData]=useState({num:100})
    
    let sum ;

    function handleUpdate(){
        updateData({num:data.num+1})
    }

    return<div>
        <h1>Operators</h1>

        <h3>State:{data.num}</h3>

        <h4>{data.num<=105 && "this will appear UNTIL 105"}</h4>

        <h4>{data.num>105 && "this will appear AFTER 105"}</h4>

        <h4>{sum || "this will show up until a value is assigned to var/let sum"}</h4>

        {/* ternary opertor to pass both positive and negative condition */}
        <h4>{data.num>105 ?"This shows when num>105":"Default value"}</h4>

        <button onClick={handleUpdate}>Update</button>
    </div>
}
export default Op;