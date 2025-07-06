import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../firebaseConfig";


const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);
export const ContextProvider = ({children}) => {

    const [proyectos, setProyectos] = useState([]);


    useEffect(() => {
        const proyectosCollection = collection(db, "proyectos");
        
        getDocs(proyectosCollection)
        .then(snapshot => {
            let arrayDeProyectos = snapshot.docs.map(el => ({
                id: el.id,
                ...el.data()
            }));
            setProyectos(arrayDeProyectos);
            
        })
        .catch(err => console.error("Error al obtener los proyectos:", err))        
    }, []);

    return (
        <AppContext.Provider value={{proyectos}}>
            {children}
        </AppContext.Provider>
    )

}