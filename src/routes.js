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
    path: '/ontology',
    handler: (req,h) => {
      return h.view('doc')
    }
},
];

module.exports = routes;