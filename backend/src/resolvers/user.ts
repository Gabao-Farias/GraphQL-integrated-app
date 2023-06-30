import { randomUUID } from "node:crypto";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import UserModel from "../models/user";

@Resolver()
export default class UserResolver {
  private data: UserModel[] = [];

  @Query(() => [UserModel])
  async users() {
    return this.data;
  }

  @Mutation(() => UserModel)
  async createUser(@Arg("name") name: string) {
    const user = { id: randomUUID(), name };

    this.data.push(user);

    return user;
  }
}
