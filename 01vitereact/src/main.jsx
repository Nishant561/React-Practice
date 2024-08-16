import React from 'react'
import ReactDOM from 'react-dom/client'

const anotherElement = React.createElement(
  'a',
  {href:'https://www.youtube.com/watch?v=IMp9txK4hyI&t=1397s', target:'_blank'},
  'click me'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  anotherElement
  
)
