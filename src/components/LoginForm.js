// LoginForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/LoginForm.css';
import Notifications from './Notifications.jsx'; 
import { useParams,useNavigate } from 'react-router-dom';
import amodocs from './amdocs.png';
import DesktopNotification from './DesktopNotification.jsx';
import WhatsAppQRCode from './WhatsAppQRCode.js';
const Container = styled.div`
  background-color: #D3D3D3;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #00c3ffd9;
  padding: 12px;
`;

const HeaderContent = styled.span`
  color: white;
`;

function LoginForm() {
  const navigate= useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission

    
    navigate("/Notifications");
  };
 
  return (
    <Container >
      
      <Header>
      <HeaderContent>Incident Notifications</HeaderContent>
      <HeaderContent>Join Incident Bridge</HeaderContent>
      </Header>

      <div className="login-form-container" style={{ marginTop: '100px' }}>
      <img src={amodocs} alt="Logo" className="login-logo" />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </Container>
  );
}
 
export default LoginForm;