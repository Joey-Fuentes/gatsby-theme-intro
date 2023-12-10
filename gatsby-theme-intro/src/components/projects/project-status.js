import React from "react"
import { ProjectType } from "../../types"

const ProjectStatus = ({ status }) => (
  <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
    <span
      className={`inline-block w-2 h-2 rounded-full mr-2 ${
        status === "Active" ? "bg-green-500" 
		: status === "Active - For sale" ? "bg-green-500" 
		: status === "For sale" ? "bg-green-500" 
		: status === "Active - Coming soon" ? "bg-green-500" 
		: status === "Pending - Accepting backup offers" ? "bg-yellow-300" 
		: status === "Pending - Under contract" ? "bg-yellow-600" 
		: status === "Pending" ? "bg-yellow-600" 
		: status === "Expired" ? "bg-red-900" 
		: status === "Sold" ? "bg-blue-500" 
		: "bg-pink-400"
      }`}
    ></span>
    Status: {status}
  </li>
)

ProjectStatus.propTypes = {
  status: ProjectType.status,
}

export default ProjectStatus
