import { useRef, useState } from "react";
import "./register.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";


export default function Register() {
    
    const name=useRef();
    const email=useRef();
    const studentNo=useRef();
    const Branch=useRef();

    const [error, setError] = useState({});

    const handleClick = async (e) => {
        e.preventDefault();
        setError(null); // Clear previous errors
    
        const user = {
            name:name.current.value,
            email:email.current.value,
            studentNo:studentNo.current.value,
            Branch:Branch.current.value

        }
    
        try {
            await axios.post("/users/register", user);
          } catch (err) {
            console.error(err);
    
            if (err.response && err.response.status === 400) {
                console.log(err.response.data);  // Log the entire error response
                if (err.response.data.error === 'already registered') {
                  alert('already registered');
                } else {
                  alert('Successfully Registered');
                }
              } else {
                alert('An unexpected error occurred. Please try again.');
              }
        }


        
        
};


    return(
        <>
        <div className="register">
           <div className="container">
              <form className="loginBox" onSubmit={handleClick}>
               <h1>Register to Participate</h1>
               <label>Name:</label>
               <input type="text" required placeholder="Name" ref={name} className="inputData"/>
               
               <label>Email:</label>
               <input type="email" required placeholder="Email" ref={email} className="inputData"/>
    
               <label>Student No:</label>
               <input type="integer" required placeholder="Student No" ref={studentNo} className="inputData"/>
    
               <label>Branch:</label>
               <input type="text" required placeholder="Branch" ref={Branch} className="inputData"/>
             
             <Link to="/">
               <button className="submitButton" type="submit">Submit</button>
               </Link>

             </form>
    
            
           </div>
    
        </div>
        
        </>
       )
    
};
   
   
   

