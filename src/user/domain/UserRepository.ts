import { User } from "./User";

export interface UserRepository {
  getUsers(): Promise<User | null>;
  createUsers(userData : any): Promise<User | null>;
  deleteUsers(userId: string): Promise<User | null>;
  getByIdUsers(userId: string): Promise<User | null>;
}
