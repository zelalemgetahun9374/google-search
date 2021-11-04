import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All'},
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
]

export default function Links() {
  return (
    <div>
      {links.map(({ url, text}) => 
        <NavLink key={url} to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2" className="m-2 pb-0">
         {text}
        </NavLink>)
      }
    </div>
  )
}
