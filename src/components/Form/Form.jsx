import React, { useState } from 'react';
import * as yup from 'yup'
const Form = () => {
  const [formData, setFormData] = useState(
    {/*name: '', email: '', phone: '', address: '',
    city: '', gender: '', occupation: '', message: ''*/}
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    }
    {console.log("Submitted Data:", formData);
  };
  const inputClass = "w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600";
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-500 shadow-lg rounded-lg border border-gray-500">
      <h2 className="text-2xl font-bold mb-6 text-center text-black ">Registration Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="userName">Full Name:</label>
          <input type="text"
           name="name" 
          onChange={(e)=> setName(e.target.value)}
           className={inputClass} required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" 
            name="email"
             onChange={(e)=> setemail(e.target.value)}
             className={inputClass} required />
          </div>
          <div>
            <label htmlFor="cnic">CNIC:</label>
            <input type="cnic" 
            name="cnic"
              onChange={(e)=> setCnic(e.target.value)}
             className={inputClass} required />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input 
            type="tel"
             name="phone" 
              onChange={(e)=> setPhone(e.target.value)} 
             className={inputClass} required />
          </div>
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <input type="text"
           name="address"
             onChange={(e)=> setAddress(e.target.value)}
            className={inputClass} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city">City:</label>
            <input type="text"
             name="city" 
             onChange={(e)=> setCity(e.target.value)}
             className={inputClass} />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select name="gender" onChange={handleChange} className={inputClass}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="occupation">Occupation:</label>
          <input type="text"
           name="occupation"
            onChange={(e)=> setOccupation(e.target.value)}
             className={inputClass} />
        </div>
        <button 
          type="submit" 
          className=" px-50 py-2 text-white bg-black hover:bg-amber-950 rounded-2xl">Submit</button>
      </form>
    </div>
  );
};

export default Form
