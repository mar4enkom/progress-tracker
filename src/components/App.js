import React from 'react';

import Card from './Card'
import Modal from "./Modal"

import {useSelector} from "react-redux";

export default function App () {

    const progressArray = useSelector(state => state.progressData);
    console.log(progressArray)

    const displayCards = (arr, category) => {
        return arr.filter(item => item.status === category)
                  .map(item => <Card {...item} />)
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
                        {displayCards(progressArray, 'todo')}
                    </div>
                    <div className={"col-lg-4 col-sm-12"}>
                        <h3 className="mb-3 text-center">In progress</h3>
                        {displayCards(progressArray, 'progress')}
                    </div>
                    <div className={"col-lg-4 col-sm-12"}>
                        <h3 className="mb-3 text-center">Done</h3>
                        {displayCards(progressArray, 'done')}
                    </div>
                </div>
            </div>

            <Modal />
        </>
    )
}