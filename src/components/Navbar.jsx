import { useState } from "react"


function Navbar(){


const [open,setOpen] = useState(false)



return (

<nav>


<div className="nav-logo">
MK
</div>



<div 
className="hamburger"
onClick={()=>setOpen(!open)}
>

<span></span>
<span></span>
<span></span>

</div>




<div className={open ? "menu active" : "menu"}>


<a href="#home">خانه</a>

<a href="#about">درباره</a>

<a href="#skills">مهارت‌ها</a>

<a href="#projects">پروژه‌ها</a>


</div>



</nav>

)


}


export default Navbar