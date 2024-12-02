export type User = {
  username: string;
  password: string;
};

export class UserService {
  private user: User[] = [{ username: "admin", password: "admin" }];

  authenticate(username: string, password: string): boolean {
    return this.user.some(
      (user) => user.username === username && user.password === password
    );
  }
}
