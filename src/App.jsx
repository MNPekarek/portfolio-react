import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routers/route";
import { v } from "./styles/Variables";
import { Light, Dark } from "./styles/Themes";
import { ContextProvider } from "./components/context/Context";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const themeStyle = theme === "dark" ?  { ...Dark, ...v } : { ...Light, ...v } ;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <ContextProvider>
            <BrowserRouter>
              <Wrapper>
                <Sidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                <Containers id="main-content"
                  className={sidebarOpen ? "sidebarState active" : "" }
                >
                  <Navbar />
                  <MyRoutes />
                </Containers>
              </Wrapper>
            </BrowserRouter>
          </ContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

const Containers = styled.main`
  flex: 1;
  margin-left: 3.5rem;
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.3s ease;
  overflow: auto;
`;

const Wrapper = styled.div`
display:flex;
width: 100%;
height: 100vh;
`;

// margin-left: ${({ className }) =>
//     className === "sidebarState active" ? "300px" : "90px"} ; 