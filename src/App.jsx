
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import CopmleteProfile from './pages/CopmleteProfile'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className='container xl:max-w-screen-xl'>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/complete-profile' element={<CopmleteProfile />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App
