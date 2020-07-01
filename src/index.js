import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import lozad from 'lozad'

document.body.style.margin = 0
document.body.style.overflowX = 'hidden'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
