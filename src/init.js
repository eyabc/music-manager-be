import app from './app';
import dotenv from 'dotenv'
import '../mysql';

dotenv.config();
const port = process.env.PORT;

const handleListening = () => console.log(`http://localhost:${ port }`);

app.listen(port, handleListening);