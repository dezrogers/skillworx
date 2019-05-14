import React from 'react'
import ApplyButton from '../applyJob/applyJob'
import "./Task.css"
import moment from "moment"

function Task({
  title,
  name,
  description,
  zipcode,
  date,
  payRate,
  _id,
  createdById,
  image,
}) {
  return (
    <div className="card mb-3 mr-3 task-cards">
      <div className="card-header">
        <img src={image} alt="user"></img>
        <div className="card-header-text">
          <h4 className="text-right">{title}</h4>
          <h6 className="text-right">{name}</h6>
          <i className="font-awesome far fa-envelope"></i>
          <i className="font-awesome text-right fas fa-map-marker-alt"></i><span>{zipcode}</span>
        </div>

      </div>
      <div className="card-body task-card-body">
        <p className="text-left">{description}</p>
        <p id="date" className="text-left">{moment(date).format("MM/DD/YYYY")}</p>
        <p id="payRate" className="text-left">{payRate}</p>

        <ApplyButton _id={_id} createdById={createdById}/>
      </div>
    </div>  

  )
}

export default Task
