import React from 'react'

interface Props{
    title : string
    postedOn : string
    description : string
    upvoted : boolean
    downvoted : boolean
    upvoteCount : number
    downvoteCount : number
}

const TwitsCard = ({title, postedOn, description, upvoted, upvoteCount, downvoted, downvoteCount} : Props) => {
  return (
    <div>TwitsCard</div>
  )
}

export default TwitsCard