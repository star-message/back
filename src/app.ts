import * as express from 'express';

class App {
  private app;

  constructor() {
    this.app = express();
  }

  listen(port: string | number) {
    this.app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  }
}

export default App;
