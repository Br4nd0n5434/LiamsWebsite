import ThemeController from "./ThemeController"
import Icon from '../assets/logo/logo_png.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed shadow-md">
      <div className="navbar-start w-full">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-lg dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li>
              <a>Resources</a>
            </li>
            <li><a>Services</a></li>
          </ul>
        </div>
        <img src={Icon} alt="Our Logo" className="max-w-40 md:max-w-48 lg:absolute lg:left-5 mx-auto" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Summary</a></li>
          <li><a href="#">Gallery</a></li>
        </ul>
        <a className="btn w-28 hidden lg:flex ms-1">Contact Us</a>
      </div>
      <div className="navbar-end mr-3 w-auto lg:w-full">
        <ThemeController />
      </div>
    </div>
  )
}

export default Navbar