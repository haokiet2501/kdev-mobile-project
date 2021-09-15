import React from 'react'
import '../css/Message.css'

const Message = ({ children }) => {
    return (
        <>
            <div className="alert">
                {children}
            </div>
        </>
    )
}

export default Message
