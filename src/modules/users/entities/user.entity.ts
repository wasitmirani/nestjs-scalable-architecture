export class User {
  id?: string | number;
  email: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
