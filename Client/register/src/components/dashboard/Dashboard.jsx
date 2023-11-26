import "./dashboard.css"
import {Link} from "react-router-dom"

const Dashboard = () => {
  return (
    <>
    <div className='home'>
     
     <h1 className='Intro'> Welcome to Geek-A-Thon  </h1>
     <h3 className='desc'>Want to Participate ? Click below to Register </h3>
     
     <Link to="/register">
     <button className='registerButton'>Register</button>
     </Link>

  </div>
    
    </>
  )
}

export default Dashboard
