import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    // 유저정보
    const [user, setUser] = useState({
        name: "딴땨다",
        profile : null, 
        likelist : [] 
    });
    // 상품정보
    const [productList, setProductList] = useState([
        {
            productId : 1,
            productName : "웨딩드레스1",
            productDetail : "비즈 장식을 더한 화사한 드레스",
            productPicture : ["dress1.jpg"]
        },
        {
            productId : 2,
            productName : "웨딩드레스2",
            productDetail : "뒷모습에 초점을 맞춰서 행진할 때 이쁜 드레스",
            productPicture : ["dress2.jpg" ]
        },
        {
            productId : 3,
            productName : "웨딩드레스3",
            productDetail : "심플하고 세련된 스타일의 드레스 ",
            productPicture : ["dress3.jpg" ]
        },
        {
            productId : 4,
            productName : "웨딩드레스4",
            productDetail : "전문가가 섬세히 자수를 뜬 드레스 ",
            productPicture : ["dress4.jpg" ]
        },
    ])
    
    // 댓글정보
    const [allComments, setAllComments] = useState([
        {
            commentId : 1,
            productId : 1,
            name : "green",
            text : "직원이 친절해여~~"
        },
        {
            commentId : 2,
            productId : 1,
            name : "나미",
            text : "드레스 넘 이뻐여"
        },
        {
            commentId : 3,
            productId : 2,
            name : "겨울예신",
            text : "많이 다녔는데 여기가 젤 이쁜듯..ㅎ"
        }
    ])

    const [commentCount, setCommentCount] = useState(3);

    const value = {
        state : {user, productList, allComments, commentCount},
        action : {setUser, setProductList, setAllComments, setCommentCount}
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};
const { Consumer : DataConsumer } = DataContext;

export  {DataProvider, DataConsumer};

export default DataContext;