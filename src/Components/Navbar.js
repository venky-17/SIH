import "../Css/Navbar.css"


const Navbar = () =>{
    return (
        <>
        <nav>
            <div className="logo">
               <h1>Legal Compass</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><button className="logout-btn">Logout</button></li>
                    <li><a href="">UserName</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar