import React from 'react'

function SingleProfile(props) {
  const [{id, name}] = props.display
  // console.log(props)
  return (
  <div>
      <h2>{id}</h2> 
      <h2>{name}</h2>
    </div>
  )
}

export default SingleProfile;
