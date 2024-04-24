

const Navbar = () => {
    return (
        <div className=" py-2 shadow-sm">
          <div className="navbar max-w-[1500px] mx-auto">
  <div className="navbar-start">
   
    <img src="https://i.ibb.co/Y2YByxP/LOGO.png"></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   
      <li><a>Blog </a></li>
      <li><a>Offer </a></li>
      <li><a>Airline </a></li>
      <li><a>About </a></li>
    
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary">Sign In </a>
  </div>
</div>  
        </div>
    );
};

export default Navbar;