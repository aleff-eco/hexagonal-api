import User from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class UserRepositoryImp implements UserRepository {
  async getUsers(): Promise<User[] | null> {
    const users = await User.findAll();
    return users;
  }

  async createUsers(user: any): Promise<User> {
    const createdUser = await User.create(user);
    return createdUser;
  }

  async deleteUsers(userId: string): Promise<void> {
    const userToDelete = await User.findOne({ where: { id: userId } });

    if (!userToDelete) {
      throw new Error("No se encontro el usuario a eliminar");
    }

    await userToDelete.destroy();
  }

  async getByIdUsers(userId: string): Promise<void> {
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error("No se encontro el usuario a eliminar");
    }
   return user as any;
  }

}
