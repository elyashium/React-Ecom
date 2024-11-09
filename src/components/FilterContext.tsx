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