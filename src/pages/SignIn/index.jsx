
import { useEffect, useState, navigate } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginForm from '../../components/LoginForm';
import Login from '../../components/Login';
import Navbar from '../../components/Navbar/Navbar';


export default function SignIn() {
  return (
    <div>
      <Navbar
      nav1="기숙사"
      nav2="버스" />
      <Login />
    </div>
  )
}

