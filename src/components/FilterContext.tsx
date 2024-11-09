import { useContext, createContext, useState, ReactNode } from "react";

interface filterContextType {
    SearchQuery : string;
    SetSearchQuery: (query:string) => void

    selectedCategory : string;
    setSelectedCategory : (category: String ) => void; //cretaing functions that returns void.

    minPrice : number | undefined
    setMinPrice :(price : number | undefined) => void;

    maxPrice : number | undefined
    setMaxPrice : (price : number | undefined) => void;

    keyword : string;
    setKeyword : (keyword: string )=> void;
}