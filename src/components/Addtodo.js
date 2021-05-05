
import React ,{useState} from 'react'
import {connect} from "react-redux"
import {addtodo} from "./store/action/actionTypes"
import { Button,Form,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Addtodo = ({addtodo}) => {
    const [text, setText] = useState("")
    const HandleSubmite = (e)=> {
        e.preventDefault();
        if (text.trim().length ===0) {
            
            alert("please create your list")
           
        }
        else {
        const newtodo = {
           text : text  ,
           id : Math.random() ,
           isComplet : false
        }
        addtodo(newtodo)
        setText("")
    }
    }
    return (
        <div >
            <Form.Row className="d-inline-flex p-3">
      <Col xs="auto">
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="ADD YOUR LIST"
        value={text}  onChange={(e)=> setText(e.target.value )}
      />
      </Col>
      <Col xs="auto">
          <Button onClick={HandleSubmite} type="submit" className="mb-2">+</Button>
          </Col>
          </Form.Row>
        </div>

    )
}


export default connect (null,{addtodo}) (Addtodo)
