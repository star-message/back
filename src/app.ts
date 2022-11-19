import * as express from 'express';
import * as morgan from 'morgan';
import { globalRouter } from './routes';

class App {
  private app;

  constructor() {
    this.app = express();
    this.parserMiddlewares();
    this.loggingMiddlewares();
    this.routerMiddlewares();
  }

  private loggingMiddlewares() {
    this.app.use(morgan('dev'));
  }

  private parserMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  private routerMiddlewares() {
    this.app.use(globalRouter);
  }

  listen(port: string | number) {
    this.app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  }
}

export default App;
