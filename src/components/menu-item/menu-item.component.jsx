import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.styles.scss";


// Title value is deconstructed from props
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {

  let navigate = useNavigate();
  return (
    <div className={ `${size} menu-item` }
      onClick={ () => navigate(linkUrl) }>
      <div
        className="background-image"
        style={ {
          backgroundImage: `url(${imageUrl})`
        } } />
      <div className="content">
        <h1 className="title">{ title.toUpperCase() }</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem