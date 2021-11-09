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
      path: '/rdf',
      handler: (req,h) => {
        return h.view('eRDF')
      }
  },
];

module.exports = routes;