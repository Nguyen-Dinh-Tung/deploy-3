"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wallet_controller_1 = __importDefault(require("../controllers/wallet.controller"));
const walletRouter = express_1.default.Router();
walletRouter.put('/edit-money/:id', wallet_controller_1.default.postAddMoneyToWallet);
exports.default = walletRouter;
