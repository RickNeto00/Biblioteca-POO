export default class CustomError extends Error {

  constructor(message: string) {
    super(message);
  }

    getErrorMessage() {
      return this.message + 'Something Went Wrong. Try Again.';
    }
  }