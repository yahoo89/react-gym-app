import React from 'react'

const ExerciseVideosInfo = ({ infoData }) => {
  console.log(infoData)
  const { channelName, lengthText, publishedTimeText, viewCountText } = infoData
  return (
    <div className="videoDescBox">
      <h5>
        <span className="colorTitle">Channel: </span>
        {channelName}
      </h5>
      <h5>
        <span className="colorTitle">Views: </span>
        {viewCountText}
      </h5>
      <h5>
        <span className="colorTitle">duration: </span>
        {lengthText}
      </h5>
      <h5>
        <span className="colorTitle">Published: </span>
        {publishedTimeText}
      </h5>
    </div>
  )
}

export default ExerciseVideosInfo
