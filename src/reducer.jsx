export const reducer =(state,action) => {
    if(action.type === "Home_Update") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            content: action.payload.content,
            btnContent: action.payload.btnContent,
            heading: action.payload.heading
        }
    }
    if(action.type === "About_Update") {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            content: action.payload.content,
            btnContent: action.payload.btnContent,
            heading: action.payload.heading,
        }
    }   

     
    return state;
}

