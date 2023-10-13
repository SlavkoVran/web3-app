// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { connectWallet } from '../components/connectWallet/ConnectWallet'

interface AuthContextType {
  isAuthenticated: boolean;
  walletAddress: string;
  walletData: any
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [walletAddress, setWalletAddress] = useState("")
  const [walletData, setWalletData] = useState({})

  useEffect(() => {
    getCurrentWalletConnected()
  }, [])

  const getCurrentWalletConnected = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts"
        })
        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
          setIsAuthenticated(true);
        } else {
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log("Pleas install MetaMask")
    }
  }

  const login = async () => {
    try {
      const walletData = await connectWallet()
      setWalletAddress(walletData.selectedAccount)
      setWalletData(walletData)
      setIsAuthenticated(true)
    } catch (error) {
      setIsAuthenticated(false)
      console.log("Error")
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, walletAddress, walletData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
