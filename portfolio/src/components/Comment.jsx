import { ListGroup } from "react-bootstrap";

const Comment = (props) => {
    const {comment} = props;
    return (  
        <ListGroup.Item style={{
            overflowX: "hidden",
            overflowY : "100%"

            }}>
            <div>
                <h5>{comment.name}</h5>
                <p>{comment.text}</p>
            </div>

        </ListGroup.Item>
    );
}

export default Comment;