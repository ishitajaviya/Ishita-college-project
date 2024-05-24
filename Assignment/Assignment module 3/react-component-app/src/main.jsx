import React from 'react'
import ReactDOM from 'react-dom/client'
import Functional_compo from './component/Functional_compo'
import Greeting from './component/ClassCompo'
import Props from './component/Props'
import State from './component/State'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Functional_compo/>
    <Greeting/>
    <Props/>
    <State/>
  </React.StrictMode>
)
