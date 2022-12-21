import React from 'react'
import Search from "./Search";
import Title from "./Title";

function TopNav(props) {
  return (
    <div className="d-flex align-items-center justify-content-between">
    <Title/>
    <Search search={props.search}/>
  </div>

  )
}

export default TopNav
