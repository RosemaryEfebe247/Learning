import { Request, Response } from "express"
import { User } from "../schema/user.schema"

// When interface Context is implemented, the type implementing it must 
// include all the fields specified in the interface then addition if necessary 
// It helps in creating reusable schemas
interface Context {
    req: Request
    res: Response
    user: User
}

export default Context