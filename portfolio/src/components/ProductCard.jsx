import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as activeHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as disactiveHeart} from '@fortawesome/free-regular-svg-icons'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import DataContext from '../context/DataContext'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
    const {product} = props;
    const data = useContext(DataContext);
    const [likeCheck,setLikCheck] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{ 
        if(!data.state.user) {setLikCheck(false)}
    }, [data.state.user])

    const toggleLike = () => {
        if (!data.state.user) {
            return ; 
        }

    const likes = data.state.user.likelist;
    if(likes.find((like)=>(like.productId==product.productId))){
        const newLikeList = likes.filter((like)=>(like.productId != product.productId));
        data.action.setUser({
            ...data.state.user,likelist : newLikeList
        })
        setLikCheck(false);
    } else {
        const like = {productId:product.productId, productName:product.productName};
        const newLikeList = likes.concat(like);
        data.action.setUser({
            ...data.state.user,likelist:newLikeList
        })
        setLikCheck(true);
    };

  return (
  <div>
    <h1>카드</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img 
       onClick={()=>{navigate("/product/"+product.productId)}}
      variant="top" src={require(`../img/${product.productPicture[0]}`)} />
      <Card.Body>
        <Card.Title> {product.productName}</Card.Title>
        <Card.Text>
            {product.productDetail}
        </Card.Text>
        <Button variant="outline-primary" onClick={ toggleLike }>
            <FontAwesomeIcon icon={likeCheck ? activeHeart : disactiveHeart } />
            </Button>
      </Card.Body>
    </Card>
  </div>

  );
}
}
export default ProductCard;