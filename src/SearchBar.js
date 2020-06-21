import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // componentDidMount() {
    //     this.setState({
    //       filtered: [this.props.emails]
    //     });
    //   }
      
    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //       filtered: nextProps.emails
    //     });
    //   }

    handleChange(e) {
        let currentList = [];
        let newList = [];

            // If the search bar isn't empty
        if (e.target.value !== "") {
                // Assign the original list to currentList
            currentList = this.props.emails;

                // Use .filter() to determine which items should be displayed
                // based on the search terms
            newList = currentList.filter(item => {
                    // change current item to lowercase
            const lc = item.subject.toLowerCase();
                    // change search term to lowercase
            const filter = e.target.value.toLowerCase();
                    // check to see if the current list item includes the search term
                    // If it does, it will be added to newList. Using lowercase eliminates
                    // issues with capitalization in search terms and search content
            return lc.includes(filter);
        });
        } else {
                // If the search bar is empty, set newList to original task list
        newList =  [];
        }
            // Set the filtered state based on what our rules added to newList
        this.setState({
        filtered: newList
        }
        );
    }

      render() {
          //need to make the filtered list not show up immediately, or somehow start out the filtered list empty
        return (
            <div>
                <input type='text' onChange={this.handleChange} placeholder='Search...'></input>
                {this.props.makeResultsList(this.state.filtered)}
            </div>
        )
      }
}

export default SearchBar
