import React from 'react'

function Headings2(props) {
    const {children}=props
  return (
    <div>
        <h2>
            Goutham
            <h1>{children}</h1>
        </h2>
    </div>
  )
}

export default Headings2