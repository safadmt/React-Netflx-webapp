
import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import {Originals,Action, Horror, Comedy, Romance} from '../src/urls'
import './App.css'
import Banner from './componets/Banner/Banner'
import RowPost from './componets/RowPost/RowPost'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url= {Originals} title = 'Netflix originals'/>
      <RowPost url= {Action} title = 'Action' issmall/>
      <RowPost url= {Horror} title = 'Horror' issmall/>
      <RowPost url= {Romance} title = 'Romance' issmall/>
      <RowPost url= {Comedy} title = 'Comedy' issmall/>
      
    </div>
  )
}

export default App