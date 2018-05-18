export class SignUpModel {
  email: string;
  password: string;
  role: string;

  constructor() {
    this.role = 'user';
  }
}
