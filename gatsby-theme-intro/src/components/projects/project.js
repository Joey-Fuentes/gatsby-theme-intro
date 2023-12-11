import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Slider from "react-slick"
import { ProjectType } from "../../types"
import ProjectIcon from "./project-icon"
import ProjectStatus from "./project-status"
import ProjectTags from "./project-tags"

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
}

const Project = props => {
  const { name, image, url, description, status, tags, icon } = props
  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6" style={{ maxWidth: "90vw" }}>
      {image && (
        <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
          <Slider {...settings} className="overflow-hidden">
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={name} />
            <StaticImage src='../../../../../../content/images/PXL_20231203_233615953.MP.webp' alt={name} />
            <StaticImage src='../../../../../../content/images/PXL_20231203_202138613.jpg' alt={name} />
            <StaticImage src='../../../../../../content/images/PXL_20231203_202246416.jpg' alt={name} />
            <StaticImage src='../../../../../../content/images/PXL_20231203_202349427.jpg' alt={name} />
            <StaticImage src='../../../../../../content/images/PXL_20231203_202317084.jpg' alt={name} />
            <StaticImage src='../../../../../../content/images/PXL_20231203_202411780.jpg' alt={name} />
            <StaticImage src='../../../../../../content/images/PXL_20231203_202702366.jpg' alt={name} />
            <StaticImage src='../../../../../../content/images/PXL_20231203_202808176.jpg' alt={name} />
          </Slider>
        </div>
      )}
      <div className="lg:flex-1">
        <h4 className="font-bold">{name}</h4>
        {url && (
          <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            {url}
          </a>
        )}
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <ul className="pr-2">
          {status && <ProjectStatus status={status} />}
          {tags && <ProjectTags tags={tags} />}
        </ul>

        {icon && <ProjectIcon icon={icon} />}
      </div>
    </div>
  )
}

Project.propTypes = ProjectType

export default Project
