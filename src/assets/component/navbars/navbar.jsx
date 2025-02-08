import { useState } from "react";
import Link from "../link/link";
import { AiOutlineMenuUnfold,AiOutlineClose  } from "react-icons/ai";
 

function Navbar() {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Our Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];

 
    const [open,setOpen]=useState([false])
   
 
 

    return (

         <nav className="p-10 bg-base-200">
              <div  className='md:hidden text-2xl'  onClick={ ()=> setOpen(!open)}>
                {open===true?  <AiOutlineClose></AiOutlineClose>:<AiOutlineMenuUnfold></AiOutlineMenuUnfold> }
                 
              
              </div>
           <ul className={`md:flex absolute  md:static duration-300 px-6  ${open ? 'top-16':' -top-60' } bg-base-200` } >
           {
                 routes.map(route => <Link key={route.id} route={route}  ></Link>)
            }
           </ul>
        
         </nav>
    )
}

export default Navbar
