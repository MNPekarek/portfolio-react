import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

    const [visible, setVisible] = useState(true);
       

    useEffect(() => {
        let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop; 

        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                setVisible(false);
            } else {
                setVisible(true)
            }
            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll)

        };
    }, []);
    
  return (
    <nav className={visible ? "nav-visible" : "nav-hidden"}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <span ></span>
        </ul>      
    </nav>
  )
}

export default Navbar