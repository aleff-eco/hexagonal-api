import { UserRepository } from "../domain/UserRepository";

export class CreateUsersUseCase {
  constructor(
    readonly userRepository: UserRepository
  ) {}

  async run(userData : any) {
    const user = await this.userRepository.createUsers(userData);
    return user;
  }
}
