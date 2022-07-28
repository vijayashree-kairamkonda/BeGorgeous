import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { ProductReducer } from "../reducers/product-reducer";

const ProductContext = createContext([]);

const ProductProvider = ({ children }) => {
  const [{ sortBy, toggleCategory,toggleRating }, dispatch] = useReducer(ProductReducer, {
    sortBy: "null",
    toggleCategory: [],
    toggleRating: 5
  });

  const ProductData = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/products");
        return setData(response.data.products);
      } catch (error) {}
    };

    useEffect(() => {
      fetchData();
    }, []);
    return data;
  };

  const getSortedData = (data, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return data.sort((a, b) => b["price"] - a["price"]);
    }
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return data.sort((a, b) => a["price"] - b["price"]);
    }
    return data;
  };

  const getFilteredData = (data, { toggleCategory }) => {
    let newFiltered = [];
    let categoryFilter;
    if (toggleCategory.length !== 0) {
      toggleCategory.map((brand) => {
        categoryFilter = data.filter(
          (item) => item.title.toLowerCase() === brand.toLowerCase()
        );
        newFiltered = [...newFiltered, ...categoryFilter];
        
      });
      return newFiltered;
    }
    return data;
  };

  const getRatedData = (data, {toggleRating})=>{
    if( toggleRating === "4_ABOVE"){
        return data.filter((a)=>a.rating >= 4)
    }
    if( toggleRating === "3_ABOVE"){
        return data.filter((a)=>a.rating >= 3)
    }
    if( toggleRating === "2_ABOVE"){
        return data.filter((a)=>a.rating >= 2)
    }
    if( toggleRating === "1_ABOVE"){
        return data.filter((a)=>a.rating >= 1)
    }
    return data;
  }

  const data = ProductData();
  const sortedData = getSortedData(data, sortBy);
  const filteredData = getFilteredData(sortedData, { toggleCategory });
  const RatedData = getRatedData(filteredData,{toggleRating});

  return (
    <ProductContext.Provider
      value={{
        data,
        sortBy,
        dispatch,
        sortedData,
        filteredData,
        toggleCategory,
        toggleRating,
        RatedData
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductProvider, useProductContext };
