import { useContext, createContext, useState, ReactNode } from "react";

//ReactNode: A TypeScript type that
// represents anything that can be 
//rendered in React (elements, strings, numbers, fragments, etc.)



//This is defining the shape of your context data, 


// Key differences between void and undefined:

// void: Used for function return types to indicate the function doesn't return anything
// undefined: Used for values that might not exist


interface filterContextType {

    // Current state
    SearchQuery: string;
    //function to update the state
    SetSearchQuery: (query: string) => void

    selectedCategory: string;
    setSelectedCategory: (category: String) => void; //cretaing functions that returns void.

    minPrice: number | undefined
    setMinPrice: (price: number | undefined) => void;

    maxPrice: number | undefined
    setMaxPrice: (price: number | undefined) => void;

    keyword: string;
    setKeyword: (keyword: string) => void;
}

const FilterContext = createContext<filterContextType | undefined>(undefined)


// There are two different uses of undefined here:

// First undefined in <filterContextType | undefined>:


// This is the TYPE definition
// It tells TypeScript that the context can either have a value of type filterContextType OR be undefined
// This is a safety measure for when the context is accessed outside of a provider


// Second undefined in (undefined):


// This is the INITIAL VALUE of the context
// It's the actual value passed to createContext
// This is what the context will return if someone tries to use it outside of a provider


export const FilterProvider: React.FC<({childern : ReactNode})> =({children}) =>{
    
}