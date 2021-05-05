import React from 'react'
import Todocard from './Todocard'
import  {connect} from "react-redux"

const Todolist = ({todolist}) => {
    return (
        <div>
            {

                todolist.map(el=> <Todocard key={el.id}  todo={el} idx={el.id}/> )
            }
            
         
        </div>
    )
}
const  mapStateToProps =(state)=> {
    return {
        todolist : state.todo
    }


}
export default connect(mapStateToProps) (Todolist)
