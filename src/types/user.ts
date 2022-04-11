export interface UserInterface {
  id: number;
  name: string;
  age: number;
}

export class UserAccount {
  id: number;
  name: string;
  age: number;

  constructor(user: UserInterface) {
    this.id = user.id;
    this.name = user.name;
    this.age = user.age;
  }
}
