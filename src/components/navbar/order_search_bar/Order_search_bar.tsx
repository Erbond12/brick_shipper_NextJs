"use client"

import { useState } from "react";
import styles from "@/components/navbar/order_search_bar/order_serach_bar.module.css";
// source for more details on input handling: https://www.youtube.com/watch?v=sWVgMcz8Q44

const Order_search_bar = () => {
    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then( (response) => response.json())
            .then( (json) => {
                const results = json.filter( (user) => {
                    return ( 
                        value && 
                        user && 
                        user.name && 
                        user.name.toLowerCase().includes(value) 
                    )
                });
                setSearchResults(results);
                console.log(searchResults)
                console.log(results)
            });
    };

    const handleInputChange = (value) => { 
        console.log(value)
        setInput(value);
        fetchData(value);
    };


    return (
        <div className="flex justify-between gap-1">
            <div>
                #
            </div>
            <div>
                <input placeholder="Suche nach Bestellung #..." value={input} onChange={(e) => handleInputChange(e.target.value)} />
            </div>
            <div>
                {
                    searchResults.map( (result, id) => {
                        return (
                            <div key={id}>
                                {result.name}
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
}
export default Order_search_bar