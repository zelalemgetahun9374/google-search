import React, { createContext, useContext, useState} from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export default function StateContextProvider(props) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('academy');

  const getResults = async (url) => {
    if('a'){
      console.log('looooooooooooool')
    }
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`,{
      "method": "GET",
      "headers": {
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.RECACT_APP_API_KEY,
      }
    });

    const data = await res.json();

    console.log(data);
    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ results, getResults, loading, searchText, setSearchText }}>
      {props.children}
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext);