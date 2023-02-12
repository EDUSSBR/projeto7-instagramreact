import { useState } from "react";


export function useToggle(initialState){
    const [state, setState] = useState(initialState)
    function toggleState(state){
        setState(prev=> {
            return (typeof state === "boolean") ? state : !prev
        })
    }
    function setToTrueOnly(){
        setState(true)
    }
    return [state, toggleState, setToTrueOnly]
}