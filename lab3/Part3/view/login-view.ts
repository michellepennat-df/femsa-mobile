export interface LoginView {
  showError(message: string): void;
  showSuccess(message: string): void;
}

export class ConsoleLoginView implements LoginView {
  showError(message: string): void {
    console.error(message);
  }

  showSuccess(message: string): void {
    console.log(message);
  }
}
