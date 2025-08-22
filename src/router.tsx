import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import AuthLayout from './layouts/AuthLayout'
import RegisterView from './views/auth/RegisterView'
import LoginView from './views/auth/LoginView'
import AppLayout from './layouts/AppLayout'
import DashboardView from './views/DashboardView'
import PetView from './views/pets/PetView'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} index />

            <Route element={<AuthLayout />}>
              <Route path='/auth/register' element={<RegisterView />} />
              <Route path='/auth/login' element={<LoginView />} />
            </Route>

            <Route element={<AppLayout />} >
              <Route path='/dashboard' element={<DashboardView /> } />
              <Route path='/pets' element={<PetView /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
