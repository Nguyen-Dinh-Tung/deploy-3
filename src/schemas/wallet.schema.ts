import {Schema, model} from "mongoose";
import { IUser } from "./user.model";

export interface IWallet {
    icon : string
    name: string,
    userId: IUser, 
    money: number,
};

const walletSchema = new Schema<IWallet>({
    icon : String,
    name: String,
    userId: {
        type : Schema.Types.ObjectId,
        ref:'User'
    },
    money: {
        type: Number,
        default: 0
    },

});

const WalletModel = model<IWallet>('Wallet', walletSchema);

export { WalletModel };