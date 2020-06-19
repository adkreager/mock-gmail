import React, { PureComponent } from 'react'

function EmailMessage(props) {
    return (
        // <div onClick={}> to get specific email information
        <div>
        <li className='message'>
            <div className='sender'>
                {props.sender} -- 
            </div>
            <div className='subject'>
                {props.subject}
            </div>
        </li>
        <br />
        </div>
    )
}

export default EmailMessage