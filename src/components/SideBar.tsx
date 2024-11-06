
import { useEffect, useState } from 'react'


// creating interfaces for type safety

interface product {
    category: String;
}

interface FetchResponse {
    products: product[]
}



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
                const data: FetchResponse = await response.json()  //creating a interface = ":"
                const uniqueCategories = Array.from(new Set(data.products.map(products => products.category)))
                console.log(uniqueCategories)

            } catch (error) {
                console.log("error fetching products", error)
            }

        }

        fetchCategories();


    }, [])  //empty array dependency

    return (
        <div>SideBar</div>
    )
}

export default SideBar