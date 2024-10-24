"use client";
import { SetStateAction, useState } from 'react';
import axios from './config/axios';

export default function Home() {
  const [text, setText] = useState('');

  const handleClick = () => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    axios.get('/api/v1/hello')
      .then((res: { data: SetStateAction<string>; }) => {
        setText(res.data)
      })
  };

  return (
    <>
      <div className='flex justify-center mt-10'>
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleClick()}>Click!</button>
      </div>
      <div className="flex justify-center mt-5">
        <h1 className="text-3xl font-bold underline">
          { text }
        </h1>
      </div>
    </>
  );
}
