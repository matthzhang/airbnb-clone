
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import axios from "axios";
import { UserContextProvider } from './UserContext'
import AccountPage from './pages/AccountPage'

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

//pc default baseURL: http://localhost:4000
//laptop default baseURL: http://127.0.0.1:4000
//depends on test url

//steps to setup project:
//install yarn: npm install --global yarn
//setup client directory: yarn create vite client
//setup routes: yarn add react-router-dom, may need to install react-router-dom first with npm (same goes for anything being added with yarn)

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
          <Route path="/account/:subpage/:action" element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
