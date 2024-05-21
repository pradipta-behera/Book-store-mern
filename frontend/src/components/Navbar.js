import React from 'react';
import "./Navbar.css"
import image from '../assets/image.jpg'

const Navbar = () => {
    return (
    <div>
        <img className='bg-image' src={image} alt='bg-image'></img>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className='container'>
            <a className="navbar-brand text-white" href="#">
                Epic Reads
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                    <li className="nav-item active ">
                        <a className="nav-link text-white" href="#">
                            Home
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item text-white">
                        <a className="nav-link text-white" href="#">
                            Books
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white" href="#">
                            Add Books
                        </a>
                    </li>


                </ul>

            </div>
            </div>
        </nav>
        </div>
   
    );
}

export default Navbar;
