import React,{useEffect, useState} from 'react';
import "./todo.css";
// import Footer from './footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateNewTodo from '../../modals/CreateNewTodo';
import { ButtonGroup,Button } from 'reactstrap';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Cards from '../Cards';


function Todos() {
  const [modal, setModal] = useState(false);
  const[todoList, setTodoList] =useState([]);

  useEffect(()=>{
    let arr = localStorage.getItem("taskList")
    
    // it will convert array string to the arr obj.
    if(arr){
      let obj = JSON.parse(arr);
      setTodoList(obj)
    }
  },[])
  
  const toggle = () => setModal(!modal);

  const saveTodo = (todoObj) =>{
    let tempList = todoList;
    tempList.push(todoObj);
    localStorage.setItem("taskList", JSON.stringify(tempList))
    // it has 2 parameter 1 key 2 value.
    // this function will convert our array to the string
    setTodoList(tempList);
    setModal(false)
  }

  const deleteTodos =(index) =>{
    let tempList = todoList
    tempList.splice(index, 1)
    localStorage.setItem("taskList" , JSON.stringify(tempList))
    setTodoList(tempList)
    window.location.reload()
  }
  const updateToodoList = (obj, index) =>{
    let tempList = todoList;
    tempList[index] = obj;
    localStorage.setItem("taskList" , JSON.stringify(tempList))
    setTodoList(tempList) 
    window.location.reload()

  }
  const delAllData = (obj, index) =>{
    let tempList = todoList;
    tempList = [];
    localStorage.setItem("taskList" , JSON.stringify(tempList))
    setTodoList(tempList) 
    window.location.reload()

  }

  return (
    <>
      <nav className='nav'>
          <h1> Hello ab, Your Todo List </h1>
      </nav>
      <div className='task-container'>
       
        {todoList.map((val,index)=> <Cards taskObj={ val.title} index ={index} id ={index} deleteTodos ={deleteTodos} updateToodoList={updateToodoList}/>)}
     
        
      </div>
      <CreateNewTodo toggle={toggle} modal={modal} save ={saveTodo} />
    
      {/* <Footer /> */}
      <footer>
        
        <ButtonGroup className='margin-left' >
          <Button color="success" onClick ={()=>setModal(true)}>
              <LibraryAddOutlinedIcon  />
          </Button>
          <Button color="warning">
              <EditCalendarIcon />
          </Button>
          <Button color="danger" className='ml-4' onClick={delAllData}>
              <IndeterminateCheckBoxOutlinedIcon />
          </Button>
      </ButtonGroup>
        {/* gap */}
        <ButtonGroup className='margin-left'>
          <Button color="primary" >
              <UploadFileOutlinedIcon  />
          </Button>
          <Button color="warning" >
              <EditCalendarIcon />
          </Button>
          
      </ButtonGroup>
        {/* gap */}
        <ButtonGroup className='margin-left' >
          <Button color="secondary" >
              <ExitToAppOutlinedIcon  />
          </Button>
          
          
      </ButtonGroup>
    </footer>
    </>
  )
}

export default Todos