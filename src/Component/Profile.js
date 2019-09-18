import React from 'react'

function Profile(props) {
  const { name, thumbnail, age, weight, height, hair_color, professions, friends  } = props.display
  return (
  <div>
      <p>{name}</p>
      <img src={thumbnail} alt="" style={{ height:"50px", width:"50px"}}/> 
      <p>age: {age}</p>
      <p>weight: {weight}</p>
      <p>height: {height}</p>
      <p>hair color: {hair_color}</p>
      <p>professions: {professions}</p>
      <p>friends: {friends}</p>
    </div>
  )
}

export default Profile
