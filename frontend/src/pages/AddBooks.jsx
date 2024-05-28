import React from 'react';
import "./AddBooks.css"
import { useState } from 'react';
import axios from "axios";

export const AddBooks = () => {
    const [Data, setData] = useState({
        bookname: "",
        author: "",
        description: "",
        price: "",
        image: "",
    });
    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };
    const submit = async (e) => {
        e.preventDefault();
        await axios
            .post("https://localhost:1000/api/v1/add", Data)
            .then((res) => alert(res.data.message));
        setData({
            bookname: "",
            author: "",
            description: "",
            price: "",
            image: "",
        })
    };


    console.log(Data);
    return (
        <div className='AddBooks'>
            <div className='container p-4'>
                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Book Name</label>
                    <input
                        name='bookname'
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter book name"
                        onChange={change}
                        value={Data.bookname}
                    />

                </div>

                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Author Name</label>
                    <input
                        name='author'
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Enter the name of author"
                        onChange={change}
                        value={Data.author} />
                </div>

                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Description</label>
                    <input
                        name='description'
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput3"
                        placeholder="Enter description of book"
                        onChange={change}
                        value={Data.description} />
                </div>

                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Image</label>
                    <input
                        name='image'
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput4"
                        placeholder="Enter the image"
                        onChange={change}
                        value={Data.image} />
                </div>

                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Price</label>
                    <input
                        name='price'
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput5"
                        placeholder="Enter the price"
                        onChange={change}
                        value={Data.price} />
                </div>

                <button className='btn btn-success' onClick={submit}>Submit</button>
            </div>
        </div>
    )
}
