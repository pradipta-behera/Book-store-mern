import React from 'react';
import "./AddBooks.css"

export const AddBooks = () => {
    return (
        <div className='AddBooks'>
            <div className='container p-4'>
                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Book Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter book name" />
                </div>

                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Author Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the name of author" />
                </div>

                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Description</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter description of book" />
                </div>

                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Image</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the image" />
                </div>

                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Price</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter the price" />
                </div>
                
                  <button className='btn btn-success'>Submit</button>  
            </div>
        </div>
    )
}
