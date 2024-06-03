import React, { useContext, useReducer } from "react";
import {reducer} from './reducer'


const AppContext =React.createContext();


const initialState ={
    name:"",
    image:"",
    content:"",
    btnContent:"",
    heading:"",
};



const AppProvider=({children}) =>{

    const [state,dispatch] =useReducer(reducer,initialState);

    const updateHomePage =()=>{
        return dispatch({
            type: "Home_Update",
            payload:{
                name:"Seamless Learning for Brighter Futures",
                image:"./images/hero.svg",
                content:"Our innovative platform offers an effortless and seamless approach to learning, empowering students of all ages to achieve brighter futures. Join us on a transformative journey to simplify education and unlock your full potential.",
                btnContent:"hire me",
                heading: "Very proud to introduce",
            },
        });
        
    };

    
    
    
    const updateAboutPage =()=>{
        return dispatch({
            type: "About_Update",
            payload: {
                name: "Kumar Piyush",
                image: "./images/about1.svg",
                content: "I'm an undergraduate student from NSIT specialized in Information Technology. Along with my degree I've completed Java,HTML and Frontend Courses online.My Goal is to leverage my Java expertise to contribute meaningfully to innovative projects and to build a succesful career as a Full Stack Developer.Eager to collaborate and grow within the ever-evolving landscape of Java development.",
                btnContent:"Known more",
                heading: "This is me"
            },
        });
        
    };

    return <AppContext.Provider value={{ ...state,updateAboutPage,updateHomePage}}>{children} 
    </AppContext.Provider>
};

// global custom hook

const useGlobalContext =() =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext}