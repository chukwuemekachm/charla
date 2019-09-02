import server from './app';

const { PORT = 3000 } = process.env;

server.listen(PORT, () => console.log(`charla server listening on port ${PORT}`));
