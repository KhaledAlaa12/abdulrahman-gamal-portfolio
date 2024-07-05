import Navbar from 'react-bootstrap/Navbar';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect, useState } from 'react';
import logoW from "../assets/Bedo-Logo.png"
import logoB from "../assets/Bedo-Logo2.png"
import { Link } from 'react-router-dom';



function NavbarComponent() {
    const [mode, setMode] = useState(localStorage.getItem("mode") ? localStorage.getItem("mode") : "dark")

    function switchMode() {
        if (mode === "dark") {
            document.querySelector("body").style.backgroundImage = "radial-gradient(at 40% top, #121212 1%, #121212 99%)";
            document.querySelector("body").style.color = "white";
            document.querySelector(':root').style.setProperty('--slide-color', 'white');
        } else {
            document.querySelector("body").style.backgroundImage = "radial-gradient(at 40% top, #ffffff 1%, #ffffff 99%)";
            document.querySelector("body").style.color = "black";
            document.querySelector(':root').style.setProperty('--slide-color', 'black');
        }
    }

    useEffect(() => {
        switchMode();
        localStorage.setItem("mode", mode);
    })

    return (
        <Navbar className="navbar bg-transparent justify-content-between" expand="lg" data-bs-theme="dark">
            {
                mode === "dark" ?
                    <>
                        <Link to="/">
                            <img style={{ width: "3rem" }} src={logoW} alt="" />
                        </Link>
                        <LightModeIcon onClick={() => { setMode("light") }} style={{ cursor: "pointer" }} />
                    </>
                    :
                    <>
                        <Link to="/">
                            <img style={{ width: "3rem" }} src={logoB} alt="" />
                        </Link>
                        <DarkModeIcon onClick={() => { setMode("dark") }} style={{ cursor: "pointer" }} />
                    </>
            }
        </Navbar>
    );
}

export default NavbarComponent;