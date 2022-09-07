import React from "react"
import { arrayOf, shape, WorkHistoryType } from "../../types"
import "./work-history.css"

const WorkHistory = ({ history }) => {
  return (
    <>
    </>
  )
}

WorkHistory.propTypes = {
  history: arrayOf(shape(WorkHistoryType)),
}

export default WorkHistory
