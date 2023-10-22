import React from 'react'
import ReactDOM from 'react-dom/client'
import Admin from './Admin.jsx'
import Search from './Search.jsx'
import {Route , BrowserRouter, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Link to='/admin'>Admin</Link>
 <Link to='/search'>Search</Link>
 <Routes>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/search' element={<Search/>}/>
 </Routes>
 </BrowserRouter>
)
