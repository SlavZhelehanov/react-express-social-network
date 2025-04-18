import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/footer/Footer';

import Navbar from './components/navigation/navbar-lrg/Navbar';
import NavbarSm from './components/navigation/navbar-sm/NavbarSm';
import AuthProfile from './components/page/auth/authProfile/AuthProfile';
import HomePage from './components/page/HomePage';
import { UserProvider } from './contexts/UserContext';
import PageNotFound from './components/page/404/PageNotFound';
import { ProtectedRoute } from './components/globals/routGuards/RoutGuards';
import Logout from './components/page/auth/logout/Logout';

export default function App() {
    return (
        <UserProvider>
            <div className=''>
                <Navbar />
                <NavbarSm />

                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path='/auth/:id/profile' element={<AuthProfile />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path='/auth/logout' element={<Logout />} />
                    </Route>

                    <Route path='*' element={<PageNotFound />} />
                </Routes>

                <Footer />
            </div>
        </UserProvider>
    );
}