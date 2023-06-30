import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class UserModel {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;
}
