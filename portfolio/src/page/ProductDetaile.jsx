import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import ProductDisplay from "../components/ProductDisplay";
import DataContext from "../context/DataContext";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";

const ProductDetaile = () => {
    const data = useContext(DataContext);
    const {id} = useParams();
    const [comments, setComments] = useState(
        data.state.allComments
        .flilter((comment)=>(comment.productId ==id)));

    useEffect(()=>{
        setComments.apply(data.state.allComments.filter(
            (comment)=>(comment.productId==id)))},
            [data.state.allComments] );

    const getProduct = () => {
        return data.state.allComments.productList.find(
            (product)=>(product.productId==id))
    }

    return (  
        <div>
            <ProductDisplay product={getProduct()} />
                <br />
                <hr />
                <CommentInput id={id} />
                <ListGroup style={{textAling:"left"}}>
                    {
                        comments.map((comment)=>(
                            <Comment key={comment.commentId} comment={comment} />
                        ))
                    }
                </ListGroup>
        </div>
    );
}

export default ProductDetaile;