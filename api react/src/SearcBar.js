import React from 'react';
class SearchBar extends React.Component {
    state = {  
      term : 'default text'   
    };
handelChange = (event)=>{

    this.setState({
    term:event.target.value
    });

    };
handelSubmit = event =>{
    event.preventDefault();
    this.props.handelFormSubmit(this.state.term);
}
    render() { 
        return (
            <div className='search-bar ui segment'>
            <form onSubmit={this.handelSubmit} className='ui form'>    
            <div className='field'>
            <label htmlFor="video search">video Search</label>
            <input onChange={this.handelChange} name='video search' 
            type="text" value={this.state.term}/>  
            </div> 
            </form>
            </div>

          );
    }
}
 
export default SearchBar;