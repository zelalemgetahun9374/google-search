import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { useStateContext } from '../contexts/StateContextProvider'

import Links from './Links'

export default function Search() {
  const { setSearchText } = useStateContext()
  const [text, setText] = useState('')
  const [debouncedValue] = useDebounce(text, 300)

  useEffect(() => {
    if(debouncedValue){
      setSearchText(debouncedValue)
    }
  }, [debouncedValue])

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input 
        type="text"
        placeholder="🔎 Search anything"
        value={text} 
        onChange = {(e) => {setText(e.target.value)}}
        className="sm:w-96 w-80 h-10 mb-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
      />
      { text !== '' && (
        <button className="relative top-1.25 right-6 text-xl text-blue-300 " onClick={() => setText('')}>
          X
        </button>
      )}
      <Links/>
    </div>
  )
};
