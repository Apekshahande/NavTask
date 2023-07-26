import React,{useState} from 'react'
import "./login.css"

function MultipleInputs() {
    const [userRegistration, setUserRegistration] = useState({
        email:"",
        name:"",
        password:""

    })
    const [records, setRecords] = useState([])
    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name + value) ;
        setUserRegistration({
            ...userRegistration,
            [name]:value
            // [name] it's represent the current value for dinymic data.
        })
        
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        
        const newRecord = {...userRegistration,  id: new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setUserRegistration({email:"", name:"",password:""})
    }
    return (
        <div className='card'>
            <form className='form' onSubmit={handleSubmit}  >
                <h1>Create Account</h1>
                <div>
                    <label htmlFor='email'>email</label>
                    <br />
                    <input type='email' placeholder="Enter email" autoComplete="off"
                        value={userRegistration.email}                   
                        onChange={handleInput}
                        name='email' id='email'/>
                </div>
                <div>
                    <label htmlFor='name'>name</label>
                    <br />
                    <input type='text' placeholder="Enter name" autoComplete="off" 
                        value={userRegistration.name}
                        onChange={handleInput}
                        name='name' id='name'/>
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <br />
                    <input type='password' placeholder="Enter password" autoComplete="off" 
                        value={userRegistration.password}
                        onChange={handleInput}
                        name='password' id='password'/>
                </div>
                <button className="button" stype="submit"> continue</button>
                <hr />
                <h4>Already have an account? <a href=''>Log in</a></h4>
            </form>
            <div>
                {
                    records.map((curElem)=>{
                        return(
                            <div key={curElem.id}>
                                <p >{curElem.email}</p>
                                <p>{curElem.name}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default MultipleInputs