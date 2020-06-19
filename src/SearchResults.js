import React, { PureComponent } from 'react'

function SearchResults(props) {
    return (
        <div>
            <h3 className='message'>
                <div className='sender'>
                    {props.sender} -- 
                </div>
                <div className='subject'>
                    {props.subject}
                </div>
            </h3>
            <br />
            <p>{props.message}</p>
        </div>
    )
}

export default SearchResults