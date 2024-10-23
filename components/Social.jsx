import Link from "next/link"

import { FaGithub, FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path:"https://github.com/jfchilito7"},
    { icon: <FaLinkedin />, path:"https://www.linkedin.com/in/juan-chilito/"},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </Link>
            );
        })}
    </div>
    )
}

export default Social