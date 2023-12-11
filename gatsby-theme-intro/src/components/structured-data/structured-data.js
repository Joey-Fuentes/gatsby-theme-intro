import React from "react"
import { Helmet } from "react-helmet"
import { arrayOf, shape, ProfileType, SocialType } from "../../types"

const StructuredData = ({ profile, social }) => {
  const schema = {
    "@context": "http://schema.org/",
    "@type": "Person",
    name: profile.name,
    image: profile.image?.publicURL,
    jobTitle: profile.profession,
    sameAs: social.map(item => item.url),
    worksFor: {
      "@type": "Organization",
      name: profile.company,
    },
  }

  return (
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

StructuredData.propTypes = {
  profile: shape(ProfileType),
  social: arrayOf(shape(SocialType)),
}

export default StructuredData
