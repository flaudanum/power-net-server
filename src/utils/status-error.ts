class StatusError extends Error {
  statusCode: number;
  data: any[] = [];

  constructor(message: string, statusCode?: number) {
    super(message);
    // Assigns status code w/ constructor argument or default status 500 (server error)
    this.statusCode = statusCode ?? 500;
  }
}

export default StatusError;