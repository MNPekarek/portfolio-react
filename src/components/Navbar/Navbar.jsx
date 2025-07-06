import { useEffect, useState } from "react";
// import './Navbar.css'
import { Nav, Ul, Li, Anchor, Highlight } from "./Navbar.styles";
import { mainLinksNavbar } from "./NabvarLinks";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const container = document.getElementById("main-content");
    let lastScrollTop = container?.scrollTop || 0;

    const handleScroll = () => {
      const scrollTop = container?.scrollTop || 0;
      setVisible(scrollTop < lastScrollTop);
      lastScrollTop = scrollTop;
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav className={visible ? "nav-visible" : "nav-hidden"}>
      <Ul>
        {mainLinksNavbar.map(({ label, icon, to }, index) => (
          <Li
            key={label}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <Anchor as={NavLink} to={to} className={({ isActive }) => (isActive ? "active" : "")}
 >
              {icon}
              <span>{label}</span>
            </Anchor>
          </Li>
        ))}
        {/* <Highlight
          style={{
            left: hoverIndex !== null ? `${hoverIndex * 125}px` : "-9999px",
            width: "110px",
          }}
        /> */}
      </Ul>
    </Nav>
  );
}

export default Navbar;
