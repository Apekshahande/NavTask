import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// it's a similar to the bootstrap .

function CreateNewTodo({modal, toggle, save}) {
    const[todoName, setTodoName] =useState('');
    const[dueDate, setDueDate] =useState('');

    const handleChange =(e)=>{
        // const name= e.target.name;
        // const value = e.target.value;
        const {name , value} = e.target;
        if(name === "title"){
            setTodoName(value)
        }else{
            setDueDate(value)
        }
    }
    const handleSave =(e)=>{
        e.preventDefault()
        let taskObj ={}
        taskObj['title'] =todoName;
        taskObj['duedate']=dueDate;
        save(taskObj)
    }
  return (
    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>New Todo List </ModalHeader>
        <ModalBody>
            <form  className='mb-2'>
                <div className='form-group'>
                   <label className='mb-2' >
                     Title
                   </label> 
                   <input type="text" value={todoName} name = "title" required className='form-control' onChange={handleChange}/>

                </div>
                <div className='form-group mt-2'>
                    <label className='mb-2'>
                        Due Date
                    </label> 
                    <input type="date"  value={dueDate} name = "duedate" required className='form-control' onChange={handleChange}/>
                </div>
                <div className='form-group mt-3 '>
                    <Button color="warning " onClick={handleSave} className='form-control'>
                        Create
                        
                    </Button>

                </div>
                
            </form>
        </ModalBody>
        <ModalFooter>
         
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
  )
}

export default CreateNewTodo;