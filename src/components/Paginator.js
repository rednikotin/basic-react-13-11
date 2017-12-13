import React from 'react'
import {PAGE_SIZE} from "../constants"
import {Link} from 'react-router-dom'

function Paginator({ offset, total, path }) {
    let offsetN = Number(offset)
    offsetN = offsetN - offsetN % PAGE_SIZE
    const totalN = Number(total || 0)
    if (offsetN >= totalN) return <div/>
    const prev = (offsetN - PAGE_SIZE) < 0 ? <span>prev</span> : <Link to={`${path}/${offsetN - PAGE_SIZE}`}>prev</Link>
    const next = (offsetN + PAGE_SIZE) >= totalN ? <span>next</span> : <Link to={`${path}/${offsetN + PAGE_SIZE}`}>next</Link>
    return <div>{prev} {offsetN + 1}-{Math.min(offsetN + PAGE_SIZE, totalN)} of {totalN} {next}</div>
}

export default Paginator