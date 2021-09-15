import React from 'react'
import '../css/Message.css'

const Message = ({ children }) => {
    return (
        <>
            <div className="alert alert_green">
                {children}
            </div>
        </>
    )
}

export default Message
