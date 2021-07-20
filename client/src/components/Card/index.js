import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card left">
      <div className="row">
        <h4 className="col m3">{props.title}</h4>
        <div className="card-action right-align col m9">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="btn">View</button>
          </a>
          {props.onClickSave ? <button className="btn" onClick={props.onClickSave}>Save</button>
            : <button className="btn" onClick={props.onClickDelete}>Delete</button>}
        </div>
      </div>
      <p>Written By {props.authors}</p>
      <div className="row">
        <div className="col m2">
          {props.image ? <img src={props.image} alt="Book cover."/> : <img src="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif" alt="No cover available."/>}
        </div>
        <div className="col m10">
            {props.description}
        </div>
      </div>
        
    </div>
  );
}

export default Card;