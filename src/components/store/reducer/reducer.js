import {ADD_TODO ,EDIT_TODO,REMOVE_TODO,TOGGLE_COMPLETE} from '../action/action'

const initialState = {

 todo : [{
id :1,
text :"GOmyCODE" ,
isComplete:false


 }]   
}


const reducer =(state = initialState,action)=> {
    switch(action.type)
{
    case ADD_TODO :
        return ({
            ...state , todo :[...state.todo , action.payload]
        })
        case REMOVE_TODO :
            return ({
                ...state , todo: state.todo.filter(el=> el.id != action.payload)
            })

            case TOGGLE_COMPLETE :
            return ({
                ...state , todo: state.todo.map(el=> el.id === action.payload?{...el , isComplete : !el.isComplete }: el)
            })
            case EDIT_TODO :
                return ({
                    ...state , todo: state.todo.map(el=> el.id === action.payload.id?action.payload: el)
                })

default :
return state

}
}

export default reducer