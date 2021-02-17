import React from 'react';
import { Card,CardBody,CardImg,CardText,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';

function RenderComments({comments,dishId,addComment}){
    var allcomments = null;
    console.log("Dish id = "+dishId);
    allcomments = comments.map((cmnt) => {
        return(
            <div key={cmnt.id}>
                <ul className="list-unstyled">
                    <li>{cmnt.comment}</li>
                    <li>--{cmnt.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmnt.date)))}</li>
                </ul>
            </div>
        )
    });
    if(allcomments!=null){
        return(allcomments);
    }
    else{
        return(<div></div>);
    }
}

    function RenderDish({dish}) {
        return(
            <Card width="100%">
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
            </Card>
        )
    }

    function DishDetail(props) {
        const dish = props.dish;
        const comments = props.comments;
        if(dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} /> 
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={comments} 
                           addComment = {props.addComment}
                           dishId={props.dish.id}
                        />
                        <CommentForm addComment={props.addComment} dishId={props.dish.id}/>
                    </div>
                </div>
                </div>
            )
        }

        else{
            return(<div></div>)
        }
    };
export default DishDetail;