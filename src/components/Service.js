import React from 'react'
// import { GiSewingString } from "react-icons/gi"
// import { MdOutlineSell, MdOutlineHelpOutline } from "react-icons/md"
import { GiSewingString } from "react-icons/gi"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { MdOutlineHelpOutline } from "react-icons/md"

const Service = (props) => {

    const logo = props.logo
    const title = props.title
    const description = props.description

  return (
    <div className='service'>
        <div className="logo">
            {logo === 1 ? <GiSewingString className="text-4xl"/> : logo === 2 ? <FaRegMoneyBillAlt className="text-4xl"/> : <MdOutlineHelpOutline className="text-4xl"/>}
        </div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
    </div>
  )
}

export default Service