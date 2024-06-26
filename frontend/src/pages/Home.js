import React from "react"
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        
        <div className="Home-page text-white container-fluid ">
            
            <div className="row-container">
                <div className="col-lg-6 d-flex mx-auto justify-content-center align-items-center flex-column">
                    <h2>BOOK STORE FOR YOU</h2>
                    <h3>Escape into a world of imagination—find your perfect book here.</h3> 
                        <h3>Your next adventure awaits!</h3>
                    <Link to="/" className="Viewbook my-3">View Books</Link>

                </div>
             

            </div>

        </div>
    )};


    export default Home;
