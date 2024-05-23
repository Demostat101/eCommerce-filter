import { createContext, useContext, useState } from "react";
import {products} from ".././components/arrayData/ArrayData"
import Card from "../components/Card/Card";

export const context = createContext();

export const filterContext = () => {
    return useContext(context);
}



const FilterContext = ({children}) => {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");

    
    //INPUT FILTER

    const handleInputChange = (event) => {
     
        setQuery(event.target.value);
    }

    const filteredItems = products.filter((dataValue)=>dataValue.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    
    //RADIO BUTTON FILTER
    
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    }
    
    // RECOMMENDED ITEMS PAGE BUTTON
    
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    }
    
    const filteredData = (products, selected, query) => {
        
        let filterProducts = products;
        
        
        //filtering input items
        
        if (query) {
            filterProducts = filteredItems
        
        }
        
        //selected filter
        
        if (selected) {
            filterProducts = filterProducts.filter(({category, color, company, newPrice, title})=>{
               return category===selected || color === selected || company === selected || newPrice === selected || title === selected
            }) 

        }
        
        
        
        
        
        
        return filterProducts.map(({newPrice, title, img, star,reviews, prevPrice})=>{
            return <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            newPrice={newPrice}
            prevPrice={prevPrice}
            />
        })
        
        
        
    }


    const result = filteredData(products, selectedCategory, query)

    


  return (

    <context.Provider value={{handleChange,handleClick,handleInputChange,result,query}}>
        {children}
    </context.Provider>

  )
}

export default FilterContext
