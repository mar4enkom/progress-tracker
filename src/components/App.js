import React from 'react';

import {useDispatch} from "react-redux";
import * as actionCreators from '../state/actions';
import {bindActionCreators} from "redux";

import Card from './Card'

export default function App () {

    const dispatch = useDispatch();
    const {test} = bindActionCreators(actionCreators, dispatch);

    const btnHandler = () => {
        test("test");
    }

    return(
        <>
            <div className={"container"}>
                <div className="d-flex justify-content-end mt-4">
                    <button type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal">
                        Add New Item
                    </button>
                </div>
                <div className="row mt-4">
                    <div className={"col-lg-4 col-sm-12"}>
                        <h3 className="mb-3 text-center">To Do</h3>
                        <Card label={"Go to the shop"}
                              description={"Lorem iposum dolor sit ammet"}/>
                    </div>
                    <div className={"col-lg-4 col-sm-12"}>
                        <h3 className="mb-3 text-center">In progress</h3>
                        <Card label={"Go to the shop"}
                              description={"Lorem iposum dolor sit ammet"}/>
                    </div>
                    <div className={"col-lg-4 col-sm-12"}>
                        <h3 className="mb-3 text-center">Done</h3>
                        <Card label={"Go to the shop"}
                              description={"Lorem iposum dolor sit ammet"}/>
                    </div>
                </div>
            </div>

            <Modal />
        </>
    )
}

const Modal = () => {
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
                                <input type="text" className="form-control" id="recipient-name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message-text" className="col-form-label">Descriptionx:</label>
                                <textarea className="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}