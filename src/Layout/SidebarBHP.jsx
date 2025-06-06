import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import homeIcon from '../assets/home.png'; 
import assetIcon from '../assets/asset.png'; 
import kodeRekeningIcon from '../assets/kode-rekening.png'; 
import RiwayatIcon from '../assets/riwayat.svg';
import switchIcon from '../assets/switch.png'; 


function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {!isDesktop && (
                <button className="hamburger-icon" onClick={toggleSidebar}>
                    ☰
                </button>
            )}
            <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <ul className="nav-links">
                    <li>
                        <a
                            href="#"
                            onClick={() => { navigate("/bhp-home"); toggleSidebar(); }}
                            className={location.pathname === "/bhp-home" ? "active" : ""}
                        >
                            <img src={homeIcon} alt="Home" className="icon" />
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => { navigate("/bhp-page"); toggleSidebar(); }}
                            className={location.pathname === "/bhp-page" ? "active" : ""}
                        >
                            <img src={assetIcon} alt="Asset" className="icon" />
                            BHP
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => { navigate("/kode-rekening"); toggleSidebar(); }}
                            className={location.pathname === "/kode-rekening" ? "active" : ""}
                        >
                            <img src={kodeRekeningIcon} alt="Kode Barang" className="icon" />
                            Kode Rekening
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={() => { navigate("/riwayat"); toggleSidebar(); }}
                            className={location.pathname === "/riwayat" ? "active" : ""}
                        >
                            <img src={RiwayatIcon} alt="Riwayat" className="icon" />
                            Riwayat
                        </a>
                    </li>
                
                </ul>
                <div style={{ flexGrow: 1 }}></div>
                <div className="switch-system">
                    <button onClick={() => { navigate("/choose-system"); toggleSidebar(); }}>
                        <img src={switchIcon} alt="Switch System" className="icon" />
                        Switch System
                    </button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;