import React from 'react'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Phone from './components/phoneVerify/Phone'
import { Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='' element={<SignUp/>}
      />
      <Route path='/login' element={<Login/>}
      />
      <Route path='/home' element={<Home/>}
      />
      <Route path='/phone' element={<Phone/>}/>


      </Routes>
    </div>
  )
}

export default App
