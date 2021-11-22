import React from 'react';
class SearchBar extends React.Component {
    state = {userText: ""}

    onInputChange = (event) => {
        this.setState( { userText: event.target.value });
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();
        // TODO: JAK PRZEZ system propsow przekazać info w górę
    }
    render() {
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Wpisz hasło</label>
                    <input type="text" 
                        onChange={this.onInputChange}
                        value={this.state.userText}/>
                </div>
            </form>
        </div>
        )
    }
}
 
export default SearchBar;