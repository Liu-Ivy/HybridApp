import React from 'react'

function SingleProfile(props) {
  const { name, thumbnail } = props.display
  return (
  <div>
      <p onClick={props.handleClick}>{name}</p>
      <img src={thumbnail} alt="" onClick={props.handleClick} style={{ height:"50px", width:"50px"}}/> 
    </div>
  )
}

export default SingleProfile;
// onClick={props.handleClick.bind(this)}