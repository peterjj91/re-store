export default class BookstoreService {
  getBooks() {
    return [
      { 
        id: 1, 
        title: 'Production-Ready Microservice',
        author: 'Susan Fowler' },
      { 
        id: 2, 
        title: 'Release It!',
        author: 'Michael T. Nygard' }
    ];
  }
};