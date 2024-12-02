import { UserService } from "./model/user-service";
import { LoginPresenter } from "./presenter/login-presenter";
import { ConsoleLoginView } from "./view/login-view";

const userService = new UserService();
const loginView = new ConsoleLoginView();
const presenter = new LoginPresenter(userService, loginView);

presenter.login("admin", "admin");
