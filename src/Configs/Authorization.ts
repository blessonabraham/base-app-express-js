import { Action } from "routing-controllers";
var jwt = require('jsonwebtoken');

export const authorization = (action: Action, _roles: string[]): boolean => {

    const authKey = action.request.headers['authorization'];
    if (authKey) {
        try {
            var decoded = jwt.verify(authKey, process.env.SECRET_JWT_TOKEN);
            const { userId } = decoded
            action.response.id = userId
            return true
        } catch (err) {
            return false
        }
    } else {
        return false
    }

}