import React from 'react';
import axios from "axios";
import "./Books.css"
import { useState } from 'react';
import { useEffect } from 'react';
import BooksSection from '../components/BooksSection';

const Books = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchBooks=async () =>{
      await axios
      .get("http://localhost:1000/api/v1/getBooks")
      .then((res) => setData(res.data.books));
    };
    fetchBooks();
  });

  return (
    <div className='books'>
      <div className='d-flex justify-content-center align-items-center py-5'>
        <h4 className='text-white'>Books Section</h4>
       
      </div>
      {Data ? (
      <BooksSection data={Data}/>
      ) : (
      <div className='text-white'>Loading...</div>
    )}
    </div>
  );
};


export default Books;
