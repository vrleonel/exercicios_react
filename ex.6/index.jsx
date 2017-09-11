import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family' 
import Member from './member' 
ReactDOM.render(
  <Family lastName="Leonel">
    <Member name="Vitor" />
    <Member name="Emilio" />
    <Member name="Julia" />
  </Family>
, document.getElementById('app'))