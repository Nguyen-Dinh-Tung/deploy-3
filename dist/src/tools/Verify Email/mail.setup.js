"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const verifyByEmail = (req, res, id) => {
    let transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "tktclothershopc0522i1@gmail.com",
            pass: "kmyumpncamivculs"
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let content = '';
    content += `
    <div style="padding: 10px; background-color: #003375">
    <div style="padding: 10px; background-color: white;">
       
    <h1 style="color: #ee1414; width: 100%; text-align: center; font-size: 20px;">Chào mừng bạn đến với Trang web quản lý tài chính C05 ^^</h1>
        <h1 style="color: #ee1414; width: 100%; text-align: center; font-size: 20px;">Chúc mừng bạn ! Bạn đã đăng kí thành công tài khoản !</h1>

        <div style="color: black; font-size: 35px; width: 100%; text-align: center; height: 50px;">
        <h3 style="color: #ee1414; width: 100%; text-align: center; font-size: 20px;">Mời bạn click vào link <a href="http://localhost:3000/register/user/${id}">này</a> để kích hoạt tài khoản !</h3>
        </div>
    </div>
    </div>
    `;
    let mainOptions = {
        from: "395 Group",
        to: `${req.body.email}`,
        subject: 'Xác thực tài khoản',
        text: '',
        html: content
    };
    transporter.sendMail(mainOptions, (err, info) => {
        if (err) {
            res.status(200).json({ type: 'error', message: err });
        }
        else {
            res.status(200).json({ type: 'success', message: 'Một email đã được gửi đến tài khoản của bạn!' });
        }
    });
};
exports.default = verifyByEmail;