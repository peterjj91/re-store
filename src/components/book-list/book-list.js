import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    // receive data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    
    // dispatch action to store
    this.props.booksLoaded(data);
  };

  render() {
    const { books } = this.props;
    return (
      <ul className="book-list">
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

const mapDispatchToProps = {
  booksLoaded
}

// получаем книги из redux store 
export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);