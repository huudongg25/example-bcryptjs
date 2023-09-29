const User = require("../models/user.model")
const bcrypt = require('bcryptjs');


class UserController {
    async handleRegister(req, res) {
        const { username, password } = req.body
        try {
            const checkUser = await User.findOne({ where: { userName: username } })
            console.log(checkUser);
            if (checkUser) {
                return res.status(409).json({ msg: 'username already existed' })
            }
            const salt = 10 //số lần lặp để mã hoá => thường là 10-12
            const genSalt = await bcrypt.genSalt(salt)
            const newPassword = await bcrypt.hash(password, genSalt)
            console.log(newPassword);
            await User.create({ fullName: req.body.fullName, userName: username, password: newPassword })
            res.status(201).json({ msg: "Register successfully" })
        } catch (error) {
            res.status(400).json({ msg: 'Error' })
        }
    }

    async handleLogin(req, res) {
        const { username, password } = req.body
        try {
            //check U sơ có đúng không
            const checkUser = await User.findOne({ where: { userName: username } })
            if (!checkUser) {
                return res.status(409).json({ msg: 'Wrong username' })
            }
            //sau khi check U sơ thành công sẽ check password gửi lên đúng không
            const checkPass = await bcrypt.compare(password, checkUser.password) // 2 tham số (password gửi lên,password trong db)
            if (checkPass) {
                console.log(checkUser);
                const { password, ...data } = checkUser.dataValues
                return res.status(200).json({ msg: "login successfully", data: data })
            } else {
                return res.status(401).json('wrong password')
            }

        } catch (error) {
            res.status(400).json({msg:"Error"})
        }
    }
}

module.exports = new UserController()