export default (server, Response) => {
  // ---- TEST
  server.get(
    '/api/destinations',
    (schema) => {
      const data = schema.destinations.all().models;

      return new Response(200, {}, data);
    },
    {timing: 500},
  );
};
