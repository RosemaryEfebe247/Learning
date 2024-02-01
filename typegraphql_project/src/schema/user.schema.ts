import { Index, getModelForClass, index, pre, prop, queryMethod } from "@typegoose/typegoose";
import { IsEmail, MaxLength, MinLength } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import bcrypt from "bcrypt"
import { AsQueryMethod, ReturnModelType } from "@typegoose/typegoose/lib/types";

//Defining a function for findByEmail and setting the type of this to typeof User and extending Queryhelpers
function findByEmail(this: ReturnModelType<typeof User, QueryHelpers>, email: User['email']){
return this.findOne({ email})
}

//Any function extending QueryHelpers will have the findByEmail method as a Query method
interface QueryHelpers {
    findByEmail: AsQueryMethod<typeof findByEmail>
}

// The pre save is implemented before saving a document of type User
@pre<User>('save', async function () {
    
// Check that the password is being modified
if(!this.isModified('password')){
    return;
}
const salt = await bcrypt.genSalt(10)

const hash = bcrypt.hashSync(this.password, salt)

this.password = hash
})

@index({ email: 1})
//@queryMethod is a decorator used to attach custom static methods to the Mongoose model
// it enables the use of User.findByEmail(email) on this method
@queryMethod(findByEmail)
@ObjectType()
export class User {
    @Field(() => String)
    _id: string

    @Field(() => String)
    @prop({required: true})
    name: string

    @Field(() => String)
    @prop({required: true})
    email: string

    @prop({required: true})
    password: string
}

//Describe a Usermodel that allows for the addional use of query helpers
export const UserModel = getModelForClass<typeof User, QueryHelpers>(User);

@InputType()
export class CreateUserInput {
    @Field(() => String)
    name: string;

    @IsEmail()
    @Field(() => String)
    email: string;

    @MinLength(6, {
        message: 'Password must be at least 6 characters long'
    })
    @MaxLength(50, {
        message: 'Password must not be longer than 50 characters'
    })
    @Field(() => String)
    password: string;
}

@InputType()
export class LoginInput {
    @Field(() => String)
    email: string;

    @Field(() => String)
    password: string;

}