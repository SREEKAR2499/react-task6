import React from 'react';
import MyPhoto from './my-photo.png';
import '../App.css';

const Header = () => {
  return (
    <header>
      <img src={MyPhoto} alt="My Picture" className="rounded-image" />
      <h1>VINJAMURI SUNDAR SAI SREEKAR</h1>
      <p>Student at Vellore Institute of Technology</p>
    </header>
  );
}

export default Header;
