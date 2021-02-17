import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Button, Row, Label, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.toggleModal=this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false
        };
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit(values){
        this.toggleModal();
        console.log("Here is dishId" + this.props.dishId);
        this.props.addComment(this.props.dishId,values.ratings, values.name, values.comment);
    }


    render() {
        return(
            <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="ratings" md={12}>Ratings</Label>
                            <Col md={12}>
                                <Control.select model=".ratings" name="ratings" className="form-control">
                                    <option>-</option>
                                    <option>5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                </Control.select>
                                {/* <Control.select model=".ratings" name="ratings" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select> */}
                            </Col>
                            
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name" md={12}>Name</Label>
                            <Col md={12}>
                                <Control.text model=".name" id="name" className="form-control" 
                                placeholder="Your Name"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Your Feedback</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10}}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>                            
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
        );
    }
}

export default CommentForm;