import React, { useState } from 'react';

const Whatasscontact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log(formData); // For testing purposes
    // Reset the form after submission
    setFormData({ name: '', phoneNumber: '' });
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-[400px] mx-auto lg:mx-0'>
      <div className='mb-4'>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Nama'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50'
        />
      </div>
      <div className='mb-4'>
        <input
          type='tel'
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder='Nomor Telepon (WhatsApp)'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50'
        />
      </div>
      <button type='submit' className='bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark transition-colors duration-300'>
        Hubungi Kami
      </button>
    </form>
  );
};

export default Whatasscontact;
