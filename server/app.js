import express from 'express';
import helmet from 'helmet';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import bb from 'express-busboy';

// import routes
import todoRoutes from './routes/todo.server.route';
 


// define our app using express
const app = express();
// add cors 
const cors = require('cors');
app.use(cors());

// add helmet
app.use(helmet());

// express-busboy to parse multipart/form-data
bb.extend(app);

// configure express server
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

// add Source Map Support
SourceMapSupport.install();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.MONGOSERVER}/${process.env.DATABASE}?retryWrites=true&w=majority`;

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// set api routes to express server
app.use('/api', todoRoutes);

// health  api
app.get('/', (req,res) => {
  return res.end('Api working');
});


// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});


// start the server
app.listen(process.env.PORT, () => {
  console.log(`App Server Listening at ${process.env.PORT}`);
});
