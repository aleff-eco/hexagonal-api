import { UserRepository } from "../domain/UserRepository";

export class GetByIdUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async run(userId: string) {
    const user = await this.userRepository.getByIdUsers(userId);
    if (!user) throw new Error("No existe.");
    return user;
  }
}
