import React, {useState} from "react";

function Itemlist(props){
const [itemList,crossList]= useState(false);

function itemDelete(){
    crossList(prevValue =>{
        return !prevValue
    })
}

    return (
        <li style={{ textDecoration: itemList ? "line-through" : "none" }} 
        onClick={itemDelete}>{props.items}</li>
    )
}
export default Itemlist;