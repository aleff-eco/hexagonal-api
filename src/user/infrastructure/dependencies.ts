import { UserController } from "./UserController";

import { GetUsersUseCase } from "../application/GetUsersUseCase";
import { CreateUsersUseCase } from "../application/CreateUsersUseCase";
import { DeleteUsersUseCase } from "../application/DeleteUsersUseCase";
import { GetByIdUsersUseCase } from "../application/GetByIdUsersUseCase";
import { UserRepositoryImp } from "./UserRepositoryImp";

const userRepositoryImp = new UserRepositoryImp();

export const getUsersUseCase = new GetUsersUseCase(
  userRepositoryImp, 
);
export const createUsersUseCase = new CreateUsersUseCase(
  userRepositoryImp, 
);
export const deleteUsersUseCase = new DeleteUsersUseCase(
  userRepositoryImp, 
);
export const getByIdUsersUseCase = new GetByIdUsersUseCase(
  userRepositoryImp, 
);


export const userController = new UserController(getUsersUseCase, createUsersUseCase, deleteUsersUseCase, getByIdUsersUseCase);
