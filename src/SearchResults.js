import React from 'react'

function SearchResults(props) {
    return (
        <div className="result">
            <h3 className='message'>
                <div className='sender'>
                    {props.sender}
                </div>
                <div className='subject'>
                    {props.subject}
                </div>
            </h3>
            <p className="email-message">{props.message}</p>
        </div>
    )
}

export default SearchResults
