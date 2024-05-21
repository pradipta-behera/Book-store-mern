import React from 'react';
import "./Navbar.css"
// import image from '../assets/image.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            
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
                            <Link className="nav-item active nav-link text-white" to={"/"}>
                                Home
                            </Link>
                            <Link className="nav-item active nav-link text-white" to={"/books"}>
                                Books
                            </Link>
                            <Link className="nav-item active nav-link text-white" to={"/addBooks"}>
                                Add Books
                            </Link>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;
