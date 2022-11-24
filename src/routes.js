const {
  addHandler,
  getAllHandler,
  getByIdHandler,
  editByIdHandler,
  deleteByIdHandler,
} = require('./handlers');

const routes = [
  {
    method: 'POST',
    path: '/books/{post}',
    handler: addHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteByIdHandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
