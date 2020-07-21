import React from 'react';

import "./card.scss";

const card = (props)=>{
    const style = {
      backgroundColor: generateColor(),
    };
          return (
            <div className="card" key={props.item.id}>
              <i className="material-icons circle circle-init" style={style}>
                <span className="avatar-initials">{props.initials}</span>
              </i>
              <div className="card-content">
                <p className="applicant-name">
                  {props.item.firstName} {props.item.lastName}
                </p>
                <p> {props.item.telNo} </p>
                <p>{props.item.email}</p>
                <p className="applicant-status">{props.item.status}</p>
              </div>
            </div>
          );
}

const generateColor = () => {
  return "#" + Math.random().toString(16).substr(-6);
};


export default card;