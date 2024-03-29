import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserInput, LoginInput, User } from "../schema/user.schema";
import UserService from "../service/user.service";
import Context from "../types/context";

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
    login(@Arg('input') input: LoginInput, @Ctx() context: Context){
        console.log(Arg)
        return this.userService.login(input, context);
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
