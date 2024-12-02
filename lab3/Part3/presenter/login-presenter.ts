import { UserService } from "../model/user-service";
import { LoginView } from "../view/login-view";

export class LoginPresenter {
  private userService: UserService;
  private loginView: LoginView;

  constructor(userService: UserService, loginView: LoginView) {
    this.userService = userService;
    this.loginView = loginView;
  }

  login(username: string, password: string): void {
    if (!username || !password) {
      this.loginView.showError(
        "El nombre de usuario y la contraseña no pueden estar vacíos"
      );
      return;
    }

    if (this.userService.authenticate(username, password)) {
      this.loginView.showSuccess("¡Inicio de sesión exitoso!");
    } else {
      this.loginView.showError("Usuario o contraseña incorrectos");
    }
  }
}
