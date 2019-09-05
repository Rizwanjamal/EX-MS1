import React, { Component } from "react";

class Table extends Component {

    isSearched = searchTerm => item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase());

    render () {
        const {list, searchTerm, removeItem} = this.props;
        return (
            <div>
                {list.filter(this.isSearched(searchTerm)).map(item => {
                    return (
                      <div key={item.objectID}>
                        <span>
                          <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <span>
                          <button
                            onClick={() => removeItem(item.objectID)}
                            type="button"
                          >
                            Remove Item
                          </button>
                        </span>
                      </div>
                    );
                  })}
            </div>
        )
    }
}

export default Table;