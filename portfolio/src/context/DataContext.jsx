import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    // 유저정보
    const [user, setUser] = useState({
        name : "기가지니",
        profile : null,
        likelist : []
    });
    // 상품정보
    const [productList, setProductList] = useState([
        {
            productId : 1,
            productName : "",
            productDetail : "",
            productColor : "white",
            productPicture : [ ]
        },
        {
            productId : 1,
            productName : "",
            productDetail : "",
            productColor : "white",
            productPicture : [ ]
        },
        {
            productId : 1,
            productName : "",
            productDetail : "",
            productColor : "white",
            productPicture : [ ]
        },
        {
            productId : 1,
            productName : "",
            productDetail : "",
            productColor : "white",
            productPicture : [ ]
        },
    ])
    
    // 댓글정보

    const value ={
        state : {user},
        action : {setUser}
    }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

export {  DataProvider}

export default DataContext;