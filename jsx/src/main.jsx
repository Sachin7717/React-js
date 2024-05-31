import React from 'react';
import ReactDOM from 'react-dom/client'

const google= (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const youtube = React.createElement(
  'a',
  { href: 'https://www.youtube.com/', target: '_blank' },
  'visit Youtube'
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {google}
  <br />
  {youtube}
  </>
 
)
