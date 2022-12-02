import bcrypt from "bcrypt";
import { Request, Response } from "express";
import Users from '../schemas/user.schema'
class AuthServices {
  private static encode: string = "nzvfrxcwnpeitvpn";

  static async createNewUser(req: Request, res: Response, data: any) {
    try {
      if (data) {
        const { email, passworld } = data;
        const userExist = await Users.findOne({ email });
        if (userExist) {
          return "User exist";
        }
        let encodePassworld = await bcrypt.hash(
          passworld,
          10
        );
        data.passworld = encodePassworld;
        const newUser = await Users.create(data);

        if (newUser) {
          return {
            message: "Create success",
            newUser,
          };
        }
      }
    } catch (e) {
      if (e) {
        throw new Error(e.message);
      }
    }
  }
  static async signIn(req: Request, res: Response, data: any) {
    try {
      const { email } = data;
      const user = await Users.findOne({ email });
      if (!user) {
        return {
          message: "User not exist",
        };
      } else {
        let compPassworld = await bcrypt.compare(
          data.passworld,
          user.passworld
        );
        if (compPassworld) {
          return {
            message: "Login success",
            location: "/home",
          };
        } else {
          return "Incorrect password";
        }
      }
    } catch (e) {
      if (e) {
        throw new Error(e.message);
      }
    }
  }
  static async changePassWorld(data: any) {
    try {
      let { email, passworld, newPassWorld } = data;
      const user = await Users.findOne({ email });
      
      if (user) {
        let compPassworld = await bcrypt.compare(passworld , user.passworld) ;
        if(compPassworld){
          let hashPassWorld = await bcrypt.hash(newPassWorld , 10) ;
          user.passworld = hashPassWorld ;
          await user.save() ;
          return {
            message : 'Update success' ,
            newPassWorld : newPassWorld
          }
        }else{
          return{
            message : 'Incorrect PassWorld'
          }
        }
      }
    } catch (e) {
      if (e) {
        throw new Error(e.message);
      }
    }
  }
  static async removeCustomer (email : string){
    console.log('check');
    try{
      const user = await Users.findOne({email}) ;
      if(user){
        await Users.findByIdAndDelete({
          _id : user._id
        })
        return{
          message : 'Remove customer success'
        }
      }else{
        return {
          message : 'Remove fail'
        }
      }
    }catch (e) {
      if (e) {
        throw new Error(e.message);
      }
    }
  }
}

export default AuthServices;
