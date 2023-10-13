import React from 'react'
import { useAuth } from '../context/AuthContext';
import {
  List,
  ListItem, 
  ListItemText, 
  ListItemAvatar,
  Avatar, 
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

const Profile: React.FC = () => {

  const { walletData } = useAuth()

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '40px' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Profile" secondary={walletData.selectedAccount} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Balance" secondary={walletData.balance ? walletData.balance : "Empty"} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="BalanceInEther" secondary={walletData.balanceInEther} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Block" secondary={walletData.block} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AirportShuttleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Transaction count" secondary={walletData.transactionCount} />
      </ListItem>
    </List>
  )
}

export default Profile