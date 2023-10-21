import React from 'react'
import ReactDOM from 'react-dom/client'
import Admin from './Admin.jsx'
import Search from './Search.jsx'
import {Route , BrowserRouter, Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 {/* <Admin/> */}
 <Routes>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/search' element={<Search/>}/>
 </Routes>
 </BrowserRouter>
)
