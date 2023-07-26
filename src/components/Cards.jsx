import React, { useState } from 'react';
import { Card,CardHeader,CardBody,CardFooter,ListGroupItem ,ListGroup,ButtonGroup,Button } from 'reactstrap';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import EditTodo from '../modals/EditTodo';
import './cards.css'
import TodoItem from './todos_dashboard/TodoItem';

function Cards({taskObj , index, deleteTodos, updateToodoList}) {
    const [modal, setModal] =useState(false);

    const toggle = () =>{
        setModal(!modal)
    }
    const updateTodo = (obj) =>{
       updateToodoList(obj, index)

    }

    const handleDel = () =>{
        deleteTodos(index);
    }
  return (
    <>
        <Card
            // className="my-2"
            
            style={{
                width: '30rem',
                margin:"1rem",
                padding:0,
                textAlign:'center',
              
            }}
            
            >
            <CardHeader className='form-control'>
               
                <div class="box">
                    <div class="one "><input className='input' type = "checkbox"  /></div>
                    <div class="two"> {taskObj}</div>
                    <div class="three "> 
                        <label class="switch">
                        <input type="checkbox" checked />
                        <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                    
                   
                       
                   
               
            </CardHeader>
            <CardBody>
                
                <ListGroup flush>
                    <ListGroupItem >
                        {/* <TodoItem /> */}
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
            <CardFooter className='form-control'>
                <ButtonGroup>
                    <Button color="success">
                        <LibraryAddOutlinedIcon  />
                    </Button>
                    <Button color="warning">
                       <EditCalendarIcon onClick ={()=> setModal(true)}/>
                       {/* <EditCalendarIcon onClick ={()=> setModal(true)}/> */}
                    </Button>
                    <Button color="danger">
                        <IndeterminateCheckBoxOutlinedIcon onClick={handleDel}/>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        <EditTodo modal = {modal} toggle ={toggle} id ={index} updateTodo={updateTodo} taskObj={taskObj}/>
        </>
  )
}

export default Cards