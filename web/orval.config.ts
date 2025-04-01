export default {
  attractionApi: {
    input: 'http://localhost:10002/api-docs.yaml',
    output: {
      target: 'generated/api',
      schemas: 'generated/api/types',
    },
  },
}
