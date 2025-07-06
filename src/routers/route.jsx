import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Certificados } from "../pages/Certificados";
import { Biografia } from "../pages/biografia";
import Proyectos from "../components/proyectos/Proyectos";
import ProyectDetail from "../components/proyectos/ProyectDetails";
import ProyectosListContainer from "../components/proyectos/proyectosListContainer";
import {Service} from "../pages/Service";
import {Contact} from "../pages/Contact";



export function MyRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/certificados" element={<Certificados />} ></Route>
            <Route path="/biografia" element={< Biografia />} ></Route>
            <Route path="/service" element={< Service />} ></Route>
            <Route path="/contact" element={< Contact />} ></Route>
            <Route path="/proyectos/:id" element={<ProyectDetail/>} ></Route>
            <Route path="/proyectos" element={<ProyectosListContainer/>} ></Route>
        </Routes>
    )
}