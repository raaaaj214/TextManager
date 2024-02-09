
import React from 'react'
import UploadTile from "./UploadTile";
import { getTasks } from "@/utils/functions";
import Tile from "./Tile";

const PostWrapper = async () => {
    const res = await getTasks()
  return (
    <>
    {res.tasks?.map(task => {
      
        const Task = JSON.parse(JSON.stringify(task))
        return <Tile key={task._id.toString()} task={Task} />
      
        })}
    <UploadTile/>
    </>
  )
}

export default PostWrapper
