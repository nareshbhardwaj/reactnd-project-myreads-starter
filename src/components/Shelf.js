import React , { Component } from 'react';

class Shelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">this.props.shelfName</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.books.map((book) => (
                <li key={book.id}> 
                  <Book book = { book }/>
                </li>
              ))}
              </ol>
            </div>
          </div>
        )
    }

}