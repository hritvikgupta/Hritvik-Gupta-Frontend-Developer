import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SiSpacex } from "react-icons/si"
import { Button,Stack, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from 'react-transition-group';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [pannelOpen, setSidePannelOpen] = useState(false)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  useEffect(()=>{
    setIsOverlayOpen(pannelOpen)
  }, [pannelOpen])
  
  const closeSideBar = ()=>{
    setSidePannelOpen(false)
  }
  return (
<header className="header absolute flex items-center justify-between px-5 w-full">
  {
    isOverlayOpen ?
    <div 
    onClick={closeSideBar}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.5)'}}>

    </div>:
     <Container className="d-flex justify-between align-items-center">
     <div className="d-flex flex-row align-items-center">
  <span className="text-light mt-4" style={{fontStyle: 'italic'}}>Space</span>
  <Link to="/">
    <SiSpacex className="text-8xl text-white" />
  </Link>
</div>



     <nav className={`${isOpen ? "open" : ""}`}>
       <ul>
         <li>
           <Link to="/capsules" style={{ textDecoration: 'none' }} className="text-white text-sm">
             Capsules
           </Link>
         </li>
         <li>
           <Link to="/cores"  style={{ textDecoration: 'none' }} className="text-white text-sm">
             Cores
           </Link>
         </li>
         <li>
           <Link to="/crew"  style={{ textDecoration: 'none' }} className="text-white text-sm">
             Crew
           </Link>
         </li>
         <li>
           <Link to="/dragons" style={{ textDecoration: 'none' }}  className="text-white text-sm">
             Dragons
           </Link>
         </li>
         <li>
           <Link to="/landpads"  style={{ textDecoration: 'none' }} className="text-white text-sm">
             Landpads
           </Link>
         </li>
         <li>
           <Link to="/launches"  style={{ textDecoration: 'none' }} className="text-white text-sm">
             Launches
           </Link>
         </li>
         <li>
           <Link to="/launchpads"  style={{ textDecoration: 'none' }} className="text-white text-sm">
             Launchpads
           </Link>
         </li>
         <li>
           <Link to="/payloads"  style={{ textDecoration: 'none' }} className="text-white text-sm">
             Payloads
           </Link>
         </li>
         <li>
           <Link to="/roadster" style={{ textDecoration: 'none' }}  className="text-white text-sm">
             Roadster
           </Link>
         </li>
         <li>
           <Link to="/rockets"  style={{ textDecoration: 'none' }} className="text-white text-sm">
             Rockets
           </Link>
         </li>
         <li>
           <Link to="/ships"  style={{ textDecoration: 'none' }} className="text-white text-sm">
             Ships
           </Link>
         </li>
         <li>
           <Link to="/starlink"  style={{ textDecoration: 'none' }} className="text-white text-sm">
             Starlink
           </Link>
         </li>
       </ul>
     </nav>

     <div className="lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="text-white text-sm uppercase tracking-wider"
       >
         {isOpen ? "Close" : "Menu"}
       </button>
     </div>
     
     <Button 
 variant="outline"
 style={{backgroundColor: "transparent", borderColor: "transparent", position: "relative"}}
 onClick={()=>{setSidePannelOpen(!pannelOpen)}}
>          <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
       <div
         className="d-flex justify-content-center align-items-center"
         style={{
           color: "black",
           width: "1.5rem",
           height: "1.5rem",
           position: "absolute",
           bottom: 0,
           right: 0,
           transform: "translate(25%, 25%)",
         }}
       >
         {}
       </div>
     </Button>
   </Container>
  }
     
      
      {pannelOpen && 
  <CSSTransition 
    in={pannelOpen}
    timeout={300}
    classNames="sidebar"
    unmountOnExit
  >
    <div 
        className="fixed right-0 top-0 w-64 h-screen bg-black transition-all ease-linear duration-300 transform translate-x-0" 

      style={{ 
        position: 'fixed', 
        right: 0, 
        top: 0, 
        width: '200px', 
        height: '100vh', 
        background: 'black' 
      }}
    >
      <Button aria-label="Menu button" className = "d-flex justify-content-end" style={{ Color:"white",backgroundColor: "transparent", borderColor: "transparent", position: "relative"}} onClick={() => setSidePannelOpen(false)}>&times;</Button>
      <div className="mr-3">
      <Stack><span className="d-flex justify-content-end align-items-end text-light m-1">MISSIONS</span></Stack>
      <Stack><span className=" d-flex justify-content-end text-light m-1">LAUNCHES</span></Stack>
      <Stack><span className="d-flex justify-content-end text-light m-1">CAREERS</span></Stack>
      <Stack><span className="d-flex justify-content-end text-light m-1">UPDATES</span></Stack>
      <Stack><span className="d-flex justify-content-end text-light m-1">SHOP</span></Stack>

      </div>
    </div>
  </CSSTransition>
}

    </header>
  )
}