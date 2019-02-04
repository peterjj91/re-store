import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(bookstoreService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default withBookstoreService;
