export default abstract class Controller {
  private io: SocketIO.Server;

  constructor(io: SocketIO.Server) {
    this.io = io;
  }

  publish(event: string, data: any) {
    this.io.emit(event, data);
  }
}
