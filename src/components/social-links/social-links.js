import React from "react"
import SocialIcon from "./social-icon"
import { SocialType, arrayOf, shape } from "../../types"

const SocialLinks = ({ social }) => {
  return (
    <div className="mb-6">
      {social.map(({ name, url }, i) => {
        const colorsClass = "bg-back-light text-front";
          //i % 2 === 0 ? "bg-front text-back-light" : "bg-back-light text-front"
        return (
          <a
            aria-label={name}
            className={`inline-flex w-9 h-9 justify-center items-center rounded-full`}
            href={url}
            key={name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialIcon name={name} className="w-6 h-6" />
          </a>
        )
      })}
    </div>
  )
}

SocialLinks.propTypes = {
  social: arrayOf(shape(SocialType)),
}

export default SocialLinks
