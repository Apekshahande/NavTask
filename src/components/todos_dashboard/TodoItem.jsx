import React,{useEffect, useState} from 'react';
import './todoItem.css'



const getLocalItems=()=>{
    let list = localStorage.getItem('lists');
    console.log(list)
    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }else{
        return []
    }
}

const TodoItem=()=>{
    const[inputField, setInputField]=useState('')
    const[item, setItem]= useState(getLocalItems())

    const addItem =()=>{
        if(!inputField){

        }else{
            setItem([...item,inputField])
            setInputField('')

        }
        

    }
    const deleteItem =(id)=>{{
        const updatedItems = item.filter((val, ind)=>{
            return ind !== id;
        })
        setItem(updatedItems)
    }
        
    }
    const RemoveItem=()=>{
        setItem([])
    }

    useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(item))
        // in local storage data is geting stored into the string format.
    },[item])
    return(
        <>
       
            
       
        
        <div  className='main-div'>
            <div className='child-div'>
                    
                    
                    <div className='addItems'>
                        <input type='text' placeholder='✍ Add Items ...'  value={inputField} onChange={(e)=>setInputField(e.target.value)} />
                        <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}> click me</i>
                    
                    
                    </div>
                    <div className='showItems '>
                        {
                            item.map((value , index)=>{
                                return(         
                                <div className='eachItem' key = {index}>
                                    <div class=" d-sm-block ">
                                        <button class="btn  button"  type="button"><input className='input' type = "checkbox"  /></button>
                                    </div>
                                    
                                    <h3 >{value}</h3>
                                    <div class="col d-flex justify-content-end align-items-end">
                                    <button class="btn  button"  type="button"> </button>
                                    </div>
                                    <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(index)}></i>

                                </div>
                                

                                
                                )
                            })
                        }
                    
                    </div>
                    
               
            </div>

        </div>
        </>
    );
}
export default TodoItem;