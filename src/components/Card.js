import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import './card.css';

export default function Card({title, description, status}){

    return(
        <div className="card mt-3">
            <h5 className="card-header d-flex justify-content-between">
                {title}
                <div className="dropdown show">
                    <a className="btn btn-secondary" href="#" role="button" id="dropdownMenuLink"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon className="float-end hover"
                                         icon={faEllipsisH}/>
                    </a>

                    <div className="dropdown-menu dropdown-custom" aria-labelledby="dropdownMenuLink">
                        <CardMenu status={status} />
                    </div>
                </div>
            </h5>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

const CardMenu = ({status}) => {
    console.log(status)
    if(status === 'todo'){
        return (
            <>
                <a className="dropdown-item" href="#">На наступний етап</a>
                <a className="dropdown-item" href="#">Видалити</a>
            </>
        )
    } else if( status === 'done') {
        return (
            <>
                <a className="dropdown-item" href="#">На попередній етап</a>
                <a className="dropdown-item" href="#">Видалити</a>
            </>
        )
    }

    return (
        <>
            <a className="dropdown-item" href="#">На попередній етап</a>
            <a className="dropdown-item" href="#">На наступний етап</a>
            <a className="dropdown-item" href="#">Видалити</a>
        </>
    )
}