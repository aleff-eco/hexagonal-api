import { UserRepository } from "../domain/UserRepository";

export class DeleteUsersUseCase {
  constructor(
    readonly userRepository: UserRepository
  ) {}

  async run(userData : any) {
    const user = await this.userRepository.deleteUsers(userData);
    return user;
  }
}
