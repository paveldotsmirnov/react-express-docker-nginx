import React from 'react'
import { Link } from 'react-router'

export default function RecentActivity() {
  return (
    <div>RecentActivity
      <Link to="/dashboard/project/1">Project 1</Link>
      <Link to="/dashboard/project/2">Project 2</Link>
      <Link to="/dashboard/project/3">Project 3</Link>
    </div>
  )
}
