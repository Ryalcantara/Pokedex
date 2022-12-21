import React from 'react'
import Search from "./Search";
import Title from "./Title";

function TopNav() {
  return (
    <div className="d-flex align-items-center justify-content-between">
    <Title/>
    <Search />
  </div>

  )
}

export default TopNav
