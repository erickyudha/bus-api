const path = require('path');

const routes = [
  {
      method: 'GET',
      path: '/rdf',
      handler: (req,h) => {
        return h.view('eRDF')
      }
  },
  {
    method: 'GET',
    path: '/bus/ontology',
    handler: (req,h) => {
      return h.view('doc')
    }
  },
  {
    method: 'GET',
    path: '/public/css/doc.css',
    handler: (req, h) => {
      return h.file('../public/css/doc.css')
    }
  },
  {
    method: 'GET',
    path: '/public/img/example.svg',
    handler: (req, h) => {
      return h.file('../public/img/example.svg')
    }
  },
  {
    method: 'GET',
    path: '/public/img/logo.png',
    handler: (req, h) => {
      return h.file('../public/img/logo.png')
    }
  },
];

module.exports = routes;