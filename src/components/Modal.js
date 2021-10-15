import React, {useState} from "react";

import {useDispatch} from "react-redux";
import * as actionCreators from '../state/actions';
import {bindActionCreators} from "redux";

export default function Modal() {

    const dispatch = useDispatch();
    const {add_item} = bindActionCreators(actionCreators, dispatch);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([])

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const onAddModal = () => {
        if(!errors) add_item({title, description})
    }

    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Item</h5>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                <input type="text"
                                       className="form-control"
                                       id="recipient-name"
                                       value={title}
                                       onChange={onTitleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message-text" className="col-form-label">Description:</label>
                                <textarea className="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary"
                            onClick={onAddModal}>Add!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}