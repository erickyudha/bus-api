const routes = [
  {
      method: 'GET',
      path: '/doc',
      handler: (req,h) => {
        return h.view('doc')
      }
  },
  {
      method: 'GET',
      path: '/example.rdf',
      handler: (req,h) => {
        return h.file('example.rdf')
      }
  },
];

module.exports = routes;