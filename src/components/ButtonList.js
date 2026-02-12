import React from 'react'
import Button from './Button'

const buttons = ["All", "Music", "Sports", "Gaming", "Movies", "TV", "News", "Podcasts", "Comedy", "Education", "Technology", "Science", "History", "News"]
const ButtonList = () => {
  return (
    <div className='flex'>
      
        {buttons.map((button, index) => (
            <Button key={index} name={button}/>
        ))}
    </div>
  )
}

export default ButtonList