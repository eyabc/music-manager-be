import app from './app';
const port = 4000;
const handleListening = () => console.log(`http://localhost:${ port }`);

app.listen(port, handleListening);