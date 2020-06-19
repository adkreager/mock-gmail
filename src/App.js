import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import EmailContainer from './EmailContainer';
import EmailMessage from './EmailMessage';
import SearchResults from './SearchResults'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: [],
      newMessage: false,
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/emails')
    const json = await response.json()
    this.setState({emails: json})
  }

  makeEmailList = (proppers) => {
    return ( 
      <ul>
          {proppers.map(item =>
              <EmailMessage sender = {item.sender} subject = {item.subject} message = {item.message}/>
          )}
      </ul> )
  }

  makeResultsList = (proppers) => {
    return ( 
      <ul>
          {proppers.map(item =>
              <SearchResults sender = {item.sender} subject = {item.subject} message = {item.message}/>
          )}
      </ul> )
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div>
              <SearchBar emails={this.state.emails} makeResultsList={this.makeResultsList}/>
            </div>
          </div>
        </header>
        <body className="App-body">
          <div>
            <EmailContainer emails={this.state.emails} makeEmailList={this.makeEmailList}/>
          </div>
        </body>
      </div>
    );
    }


  }

export default App;
