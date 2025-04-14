import './App.css';
import Footer from './components/footer/Footer';

import Navbar from './components/navigation/navbar-lrg/Navbar';
import NavbarSm from './components/navigation/navbar-sm/NavbarSm';
import HomePage from './components/page/HomePage';
import { UserProvider } from './contexts/UserContext';

export default function App() {
    return (
        <UserProvider>
            <div className=''>
                <Navbar />
                <NavbarSm />

                <HomePage />

                <Footer />
            </div>
        </UserProvider>
    );
}