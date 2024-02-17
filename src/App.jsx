
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import CopmleteProfile from './pages/CopmleteProfile'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Owner from './pages/OwnerDashboard'
import AppLayout from './ui/AppLayout'
import OwnerDashboard from './pages/OwnerDashboard'
import OwnerProjects from './pages/OwnerProjects'
import OwnerSingleProject from './pages/OwnerSingleProject'

const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/complete-profile' element={<CopmleteProfile />} />
          <Route path='/owner' element={<AppLayout />}>
            <Route index element={<Navigate to="/owner/dashboard" />} />
            <Route path='/owner/dashboard' element={<OwnerDashboard />} />
            <Route path='/owner/projects' element={<OwnerProjects />} />
            <Route path='/owner/projects/:id' element={<OwnerSingleProject />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App
