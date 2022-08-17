import React, { Component } from 'react'
import names from '../names'
import importedName from '../names'

export class SearchBar extends Component {
constructor(props) {
  super(props)

  this.state = {
    names:importedName,


  }
}  

handleChange=(event) =>{
   const inputText=event.target.value.toLowerCase()
   console.log(inputText)
   const filteredNames=importedName.filter(name=>{
    return name.toLowerCase().includes(inputText)
   })
   this.setState({
    names:filteredNames
   })
}
  
render() {
    return (
      <div>
        <h1> Name Search</h1>
        <p> matching names found : {this.state.names.length}</p>
        <form>
        <input placeholder="Search here..."
               type="text"
               onChange={event => this.handleChange(event)}
               value={this.state.name}
        />
        </form>
        <div style={{margin: 'auto'}} >
             {this.state.names.map(name =>{
            return <p key={name}> {name}</p>
    })}
        </div>

      </div>
    )
  }
}

export default SearchBar