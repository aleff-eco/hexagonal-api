import { UserRepository } from "../domain/UserRepository";

export class GetUsersUseCase {
  constructor(
    readonly userRepository: UserRepository
  ) {}

  async run() {
    const user = await this.userRepository.getUsers();
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  }
}
