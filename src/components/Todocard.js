import React from 'react'
import { connect } from 'react-redux'
import {removetodo, togglecomplete} from "./store/action/actionTypes"
import { AiFillCheckCircle,AiOutlineCheckCircle,AiFillDelete } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.min.css';
import Editodo from './Editodo';

const mapDispatchToProps = dispatch => ({
    removetodo: id  => dispatch (removetodo(id) ),
    togglecomplete: id  => dispatch (togglecomplete(id))


});

    

const Todocard = ({todo ,idx,removetodo,togglecomplete}) => {
    return (
        
        <div className="d-flex justify-content-around">
<span>
<h3 style={todo.isComplete ? {textDecoration :"line-through",color: "lightgray" }: {}}>{todo.text}</h3>
</span>
<span>
             <span style ={{ cursor : "pointer"}} onClick = {()=>removetodo(idx)}><AiFillDelete size={45} color="#0069d9"/></span> <span style ={{ cursor : "pointer"}}> <Editodo todo={todo} />      </span> <span style ={{ cursor : "pointer" ,size:"20"}}
              onClick={()=> togglecomplete(todo.id)}>{todo.isComplete ?<AiFillCheckCircle size={45} color="#0069d9" /> :<span><AiOutlineCheckCircle size={45} color="#0069d9"/></span> }</span>
             </span>      

  
    
    
  
        </div>

        
    )
    
}


export default connect(null,mapDispatchToProps)(Todocard)
