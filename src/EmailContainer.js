import React, { PureComponent } from 'react'

class EmailContainer extends PureComponent {

    render() {
        return (
            <div>
                <h1>Your Emails</h1>
                {this.props.makeEmailList(this.props.emails)}
            </div>
        )
    }
}

export default EmailContainer