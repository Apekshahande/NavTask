import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// it's a similar to the bootstrap .

function EditTodo({modal, toggle, updateTodo, taskObj,id }) {
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

    useEffect(()=>{
        setTodoName(taskObj.title)
        setDueDate(taskObj.duedate)
        // simalarly for list

    },[])

    const handleUpdate = (e)=>{
        e.preventDefault()
        let tempObj ={}
        tempObj['title'] =todoName;
        tempObj['duedate']=dueDate;
        updateTodo(tempObj)
   }
    


  return (
    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Update Todo List </ModalHeader>
        <ModalBody>
            <form  className='mb-2'>
                <div className='form-group'>
                   <label className='mb-2' >
                     Id
                   </label> 
                   <input type="id"  name = "id" value ={id} required className='form-control' />

                </div>
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
                    <Button color="warning " onClick={handleUpdate} className='form-control'>
                        Update
                        
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

export default EditTodo;