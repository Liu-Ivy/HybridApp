import React from 'react'

function SingleProfile(props) {
  const { name, thumbnail } = props.display
  // console.log(props)
  return (
  <div>
      <p>{name}</p>
      <img src={thumbnail} alt="" style={{ height:"50px", width:"50px"}}/> 
    </div>
  )
}

export default SingleProfile;
