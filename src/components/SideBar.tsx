import { CloudCog } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const SideBar = () => {

    const [Categories, setCategories] = useState<String[]>([])

    const [keywords] = useState<String[]>([
        //this is static 
        "apple",
        "watch",
        "fashion",
        "trend",
        "shoes",
        "shirt"
    ])

    useEffect(() => {

        //fetching data 

        const fetchCategories = async () => {

            try {

                const response = await fetch("https://dummyjson.com/products")
                const data = await response.json()  //creating a interface = ":"


            } catch (error) {
                console.log("error fetching products", error)
            }

        }


    }, [])  //empty array dependency

    return (
        <div>SideBar</div>
    )
}

export default SideBar