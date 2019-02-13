import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            )
          })
        }
      </ul>
    )
  }
};

// возвращает объект там где ключи - название свойств, которые мы назначили компоненту, а значение - значение которое мы просвоим
const mapStateToProps = ({ books }) => {
  return { books };
};

// получаем книги из redux store 
export default connect(mapStateToProps)(BookList);