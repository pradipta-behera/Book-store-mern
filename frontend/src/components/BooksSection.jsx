import React from 'react';
import "./BooksSection.css";


const BooksSection = ({ data }) => {
 
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap '>
      {data && data.map((item, index) => (
        <div className='card m-3'>
          <img className='img' src={item.image} alt='/' />
          <h6 className='text-white px-1'>{item.bookname.slice(0,20)}..</h6>
          <p className='m-0 text-white px-1'>Author: {item.author.slice(0,10)}...</p>
          <p className='m-0 text-white px-1'>Rs.{item.price}</p>
          <div className='d-flex justify-content-around align-items-center py-3'>
          <button className='btn btn-primary'>Update</button>
          <button className='btn btn-danger'>Delete</button>
          </div>
         
        </div>
      ))}
    </div>
  );
}

export default BooksSection;
