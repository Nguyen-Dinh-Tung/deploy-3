"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { UserModel } = require('../schemas/user.model');
class AuthController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const user = yield UserModel.findOne({ email: data.email });
            if (!user) {
                const newUser = {
                    username: data.username,
                    email: data.email,
                    password: data.password
                };
                yield UserModel.create(newUser);
                return res.status(200).json({ type: 'success', message: 'User created successfully!' });
            }
            else {
                return res.status(200).json({ type: 'error', message: 'User already exists!' });
            }
        });
    }
}
module.exports = AuthController;
