import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';

import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    // receive data
    const { bookstoreService } = this.props;
    bookstoreService.getBooks()
      .then((data) => {
        // dispatch action to store
        this.props.booksLoaded(data);
      });
  };

  render() {
    const { books, loading } = this.props;
    if (loading) {
      return <Spinner />
    }
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
const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded
}

// получаем книги из redux store 
export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);