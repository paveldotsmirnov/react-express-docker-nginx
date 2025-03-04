import React from 'react'
import { useParams } from 'react-router'

export default function Project() {
  const { id } = useParams()

  return (
    <div>Project {id}</div>
  )
}
