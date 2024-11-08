
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
                setCategories(uniqueCategories);
            } catch (error) {
                console.log("error fetching products", error)
            }

        }

        fetchCategories();


    }, [])  //empty array dependency

    return (
        <div className="w-64 p-5 h-screen">
            <h1 className="text-2xl font-bold mb-10 mt-4"> React Store</h1>

            <section>


                <input
                    type="text"
                    className="border-2 rounded px-2 sm:mb-0"
                    placeholder='Search Products' />

                <div className="flex justify-center items-center">

                    <input type="text" className='border-2 mr-2 px-5 py-3 mb-3 w-full' placeholder='Min' />

                    <input type="text" className='border-2 mr-2 px-5 py-3 mb-3 w-full' placeholder='Max' />

                </div>

            </section>


        </div>
    )
}

export default SideBar