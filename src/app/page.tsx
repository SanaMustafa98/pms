"use client";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [formvalue, setFormvalue] = useState({ email: '', password: '' });
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  }

  const handleFormsubmit = async (e: any) => {
    e.preventDefault();

    if (!formvalue.email || !formvalue.password) {
      setError('Email and password are required.');
      return;
    } else {
      setError('');
    }

    try {
      const response = await fetch('https://www.demo.pms.crossdevlogix.com/api/login', {
        method: 'POST',
        body: JSON.stringify(formvalue),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log(data);
          router.push('/welcome');
        }
        setApiResponse(data);
      } else {
        const errorData = await response.json();
        setApiResponse(errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <div className="w-full max-w-xs mx-auto mt-20 bg-black">
        <form className="shadow-md rounded px-8 pt-6 pb-8 mt-5" onSubmit={handleFormsubmit}>
          <div className="text-center mb-4">
            <img src="mul.png" alt="Logo" className="w-32 h-32 mx-auto" />
            <h2 className="text-2xl font-semibold text-white mt-2">Sign In Form</h2>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email"
              name='email'
              value={formvalue.email}
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name='password'
              value={formvalue.password}
              onChange={handleInput}
            />
          </div>
          {error && (
            <div className="mb-4 text-red-500">{error}</div>
          )}
          <div className="justify content-center">
            <button
              className="bg-white hover-bg-blue-950 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" 
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
