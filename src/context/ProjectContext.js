import {createContext, useContext } from "react";
import { useProjects } from "../hooks";

export const projectsContext = createContext();
export const projectsProvider = ({children}) =>{
    const {projects , setProjects} = useProjects()


    return(
     <projectsContext.Provider value = {{projects , setProjects}}>
         (children)
     </projectsContext.Provider>
    )
};

export const useProjectsvalue = () => useContext(projectsContext);