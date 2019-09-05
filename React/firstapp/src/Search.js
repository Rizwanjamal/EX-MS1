import React, {Component} from 'react';


class Search extends Component {
    render() {
        const {value, changeMethod} = this.props;
        return (
            <form>
                <input type="text" value={value} onChange={(event) => changeMethod(event)}/>
            </form>
        )
    }
}

export default Search;