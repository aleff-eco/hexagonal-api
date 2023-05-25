import { Request, Response } from "express";
import { GetUsersUseCase } from "../application/GetUsersUseCase";
import { CreateUsersUseCase } from "../application/CreateUsersUseCase";
import { DeleteUsersUseCase } from "../application/DeleteUsersUseCase";
import { GetByIdUsersUseCase } from "../application/GetByIdUsersUseCase";

export class UserController {
  constructor(
    private readonly getUsersUseCase: GetUsersUseCase,
    private readonly createUsersUseCase: CreateUsersUseCase,
    private readonly deleteUsersUseCase: DeleteUsersUseCase,
    private readonly getByIdUsersUseCase: GetByIdUsersUseCase
  ) {}

  async getUsers(req: Request, res: Response) {
    try {
      const users = await this.getUsersUseCase.run();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching users" });
    }
  }

  async createUsers(req: Request, res: Response) {
    try {
      const user = req.body;
      const userCreated = await this.createUsersUseCase.run(user);
      res.status(200).json(userCreated);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while creating user" });
    }
  }

  async deleteUsers(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      await this.deleteUsersUseCase.run(userId);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "An error occurred while deleting user" });
    }
  }

  async getByIdUsers(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = await this.getByIdUsersUseCase.run(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "User was not found" });
    }
  }
}

