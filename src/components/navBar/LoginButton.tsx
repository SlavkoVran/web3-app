import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom'


const LoginButton: React.FC = () => {
  const { isAuthenticated, walletAddress, login, logout } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  if (isAuthenticated) {
    return (
      <Stack spacing={2} direction="row">
        <Button sx={{
          backgroundColor: '#fff',
          color: '#1976d2',
          ':hover': {
            background: '#f1f1f1',
            color: '#1976d2'
          }
        }} variant="contained" onClick={logout}>
          ...{walletAddress.substring(38)} Disconnect Wallet</Button>
      </Stack>
    );
  } else {
    return (
      <Stack spacing={2} direction="row">
        <Button sx={{
          backgroundColor: '#fff',
          color: '#1976d2',
          ':hover': {
            background: '#f1f1f1',
            color: '#1976d2'
          }
        }} variant="contained" onClick={login}> Connect Wallet</Button>
      </Stack>
    );
  }
};

export default LoginButton;