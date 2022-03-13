import React from 'react'
import {SiIndeed} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://my.indeed.com/p/christopherc-cbr3lsj' target="_blank" rel='noopener noreferrer'><SiIndeed /></a>
        <a href='https://github.com/ChristopherJConley' target="_blank" rel='noopener noreferrer'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials