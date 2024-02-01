import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserInput, User } from "../schema/user.schema";
import UserService from "../service/user.service";

@Resolver()
export default class UserResolver {
constructor(private userService: UserService){
    this.userService = new UserService()
}

    @Mutation(() => User)
    register(@Arg('input') input: CreateUserInput){
        return this.userService.createUser(input)
    }

    @Mutation(() => String)
    login(@Arg('input') input: CreateUserInput){
        return this.userService.createUser(input)
    }


    @Query(() => User)
    me(){
        return {
            _id: "123",
            name: "Jane Doe",
            email: "Jane Doe",
        }
    }
}
