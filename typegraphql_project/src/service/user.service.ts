import { ApolloError } from "apollo-server";
import { LoginInput, UserModel } from "../schema/user.schema";
import bcrypt from "bcrypt"
import { signJwt } from "../utils/jwt";

class UserService {
    async createUser(input: any) {
        // call user model to create a user
        return UserModel.create(input);
    }

    async login(input: LoginInput) {
        const e = 'Invalid email or password'
        // Get user by email and call lean() to convert the returned mongoose document
        // to javascript document ie removing extra properties that may come with the mongoose document
        const user = await UserModel.find().findByEmail(input.email).lean();

        if (!user) {
            throw new ApolloError(e)
        }

        // Validate the password
        const passwordIsValid = await bcrypt.compare(input.password, user.password)
        if (!passwordIsValid) {
            throw new ApolloError(e)
        }

        // sign a JSON web token (jwt)
        // Signing the JWT during the login to ensure that the token is generated by a trusted server and hasn't been tampered with by an attacker
        const token = signJwt();

        // Set a cookie for the jwt

        // Return the jwt

    }
}


export default UserService