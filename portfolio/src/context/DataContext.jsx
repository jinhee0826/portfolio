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
            productName : "드레스1",
            productDetail : "일단 적는중",
            productColor : "white",
            productPicture : ["prod1.png" ]
        },
        {
            productId : 2,
            productName : "",
            productDetail : "",
            productColor : "white",
            productPicture : [ ]
        },
        {
            productId : 3,
            productName : "",
            productDetail : "",
            productColor : "white",
            productPicture : [ ]
        },
        {
            productId : 4,
            productName : "",
            productDetail : "",
            productColor : "white",
            productPicture : [ ]
        },
    ])
    
    // 댓글정보

    const [commentCount, setCommentCount] = useState(3);

    const value ={
        state : {user, productList},
        action : {setUser, setProductList}
    }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};
const { Consumer : DataConsumer } = DataContext;

export {  DataProvider}

export default DataContext;