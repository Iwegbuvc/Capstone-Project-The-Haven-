import React from 'react'
import { Link } from 'react-router-dom'

export default function SimpleLink({ linkclass, linkname, linktarget }) {
  return (
    <Link className={linkclass} to={`/${linktarget}`}>
        {linkname}
    </Link>
  )
}
