import React, { useState } from 'react'
import axios from 'axios'

const RegisterCopy = () => {
  const [formData , setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
    mobile : '',
    Services: ''
  })

  const [loading , setLoading] = useState(false)
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true);
     setError('');
    try{
      const response = await axios.post('http://localhost:3001/register', formData);
      if (response.data) {
        loaclStogage.setItem('User', JSON.stringify(response.data));
        localStorage.setItem('token', response.data.token);
        navigate ('/');
      }
    }catch(err) {
      setError(err.response?.data?.message || 'An error occurred during registration.');
    }
    finally{
      setLoading(false);
    }
  }
  
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Register Copy Page</h1>
      <p className="text-center mt-4">This is a copy of the Register page.</p>      
    </div>
  )
}

export default RegisterCopy
