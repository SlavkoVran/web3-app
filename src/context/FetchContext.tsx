// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface FetchContextType {
  data: any,
  loading: boolean,
  error: string,
  countsNfts: number
}

interface FetchProviderProps {
  children: React.ReactNode
}
const FetchContext = createContext<FetchContextType | undefined>(undefined);

export const FetchProvider: React.FC<FetchProviderProps> = ({ children }) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [countsNfts, setCountsNfts] = useState(0)
  const openseaApiKey = process.env.REACT_APP_OPENSEA_API_KEY

  useEffect(() => {

    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-api-key': `${openseaApiKey}` }
    };

    fetch(`https://api.opensea.io/api/v2/collections?chain_identifier=ethereum&limit=20`, options)
      .then((response) => {
        setLoading(true)
        if (response.ok) {
          return response.json()
        } else {
          throw 'UPS! Everything is ok, exept getting data :)'
        }
      })
      .then((response) => {
        setData(response.collections)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        setCountsNfts(response.collections.length)
      })
      .catch((err) => {
        setError('Feild to fetch')
      })
  },[])

  return (
    <FetchContext.Provider value={{ data, loading, error, countsNfts }}>
      {children}
    </FetchContext.Provider>
  );
};

export const useFetch = () => {
  const context = useContext(FetchContext);
  if (!context) {
    throw new Error('useFetch must be used within an FetchProvider');
  }
  return context;
};
