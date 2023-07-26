import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// it's a similar to the bootstrap .

function CreateNewTodoItem ({modal, toggle, save}) {
    const[todoItem, setTodoItem] =useState('');
    const[dueDate, setDueDate] =useState('');
    const [id, setId] = useState(0)

    const handleChanges =(e)=>{
        // const name= e.target.name;
        // const value = e.target.value;
        const {name , value} = e.target;
        if(name === "list-item"){
            setTodoItem(value)
        }else if (name === "id"){
            setId(value)
        }
        else{
            setDueDate(value)
        }
    }
    const handleSaver =(e)=>{
        e.preventDefault()
        let taskObj ={}
        taskObj['id'] =todoItem;
        taskObj['listItem'] =todoItem;
        taskObj['duedate']=dueDate;
        save(taskObj)
    }
  return (
    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Add todo item </ModalHeader>
        <ModalBody>
            <form  className='mb-2'>
                <div className='form-group'>
                   <label className='mb-2' >
                     Todo Id
                   </label> 
                   <input type="id"  name = "id" value ={id++} required className='form-control' />

                </div>
                <div className='form-group'>
                   <label className='mb-2' >
                     Title
                   </label> 
                   <input type="text" value={todoItem} name = "listItem" required className='form-control' onChange={handleChanges}/>

                </div>
                <div className='form-group mt-2'>
                    <label className='mb-2'>
                        Due Date
                    </label> 
                    <input type="date"  value={dueDate} name = "duedate" required className='form-control' onChange={handleChanges}/>
                </div>
                <div className='form-group mt-3 '>
                    <Button color="warning " onClick={handleSaver} className='form-control'>
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

export default CreateNewTodoItem;