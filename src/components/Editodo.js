import React, {useState} from 'react'
import { Button,Modal,FormControl } from 'react-bootstrap';
import { FaUserEdit } from 'react-icons/fa'
import {connect} from "react-redux"
import {edittodo} from "./store/action/actionTypes"


const Editodo = ({edittodo,todo}) => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState(todo.text);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const HandleSubmite =(e)=> {
        e.preventDefault()
        const newtodo ={...todo ,text}
        edittodo(newtodo)
        setText("")
        handleClose()
        

    }
  
    return (
      <>
        <span  onClick={handleShow}>
        <FaUserEdit  size={45}  color="#0069d9"/>
        </span>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit YOUR TODOLIST</Modal.Title>
          </Modal.Header>
          <Modal.Body><FormControl
      placeholder="Update your list "
      aria-label="Username"
      aria-describedby="basic-addon1"
      value={text}
      onChange={(e)=>setText(e.target.value)}
    /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={HandleSubmite}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default connect(null,{edittodo}) (Editodo)
