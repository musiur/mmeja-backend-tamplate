const ServerConfig = require("../configs/server.config")
const UserModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Mail = require("../middlewares/mail.middleware")
const { secret } = ServerConfig

// user sigin controller
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if user exists
    const user = await UserModel.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password!" })
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, secret, {
      expiresIn: "1h",
    })

    // Send token to client
    res.status(200).json({
      message: "Signin successful!",
      result: {
        name: user._doc.name,
        email: user._doc.email,
        role: user._doc.role,
        createdAt: user._doc.createdAt,
        verified: user._doc.verified,
        id: user._doc.id,
        token,
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
}

// user signup controller
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role, host } = req.body

    // Check if user with the same email already exists
    const existingUser = await UserModel.findOne({ email })
    if (existingUser) {
      return res
        .status(409)
        .send({ message: "User with this email already exists" })
    }

    //   Create new user
    const user = await UserModel.create({
      name,
      email,
      password: bcrypt.hashSync(password, 8),
      role,
      verified: false,
    })

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, secret, {
      expiresIn: "1h",
    })

    const verification_link = `${
      host.includes("localhost") ? "http" : "https"
    }://${host}/verify?email=${email}&token=${token}`

    Mail(email, "Verify your account.", verification_link)
    // Return success response with token
    res.status(200).send({
      message: "User created successfully!",
      user,
      token,
    })
  } catch (error) {
    res.status(500).json({ message: "Server error", error })
  }
}

// verfication of newly/olderly created account
exports.verify = async (req, res) => {
  try {
    const { email } = req.body

    // check if user is exists or not using email
    const existingUser = await UserModel.findOne({ email })
    if (!existingUser) {
      return res.status(404).send({
        message: "This account not found!",
      })
    }

    try {
      // update verification state
      const user = await UserModel.findOneAndUpdate(
        { email },
        { verified: true }
      )
      if (!user) {
        return res.status(404).send({ message: "User not found" })
      }
      return res.status(200).send({ message: "Account verified successfully" })
    } catch (error) {
      return res.status(500).send({ message: "Error updating user" })
    }
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong!",
      error,
    })
  }
}

// get refresh token to verify account after long time
exports.refresh = async (req, res) => {
  try {
    const { email, host } = req.body

    // Check if user with the same email already exists
    const existingUser = await UserModel.findOne({ email })
    if (existingUser) {
      // Generate JWT token
      const token = jwt.sign({ userId: existingUser._id }, secret, {
        expiresIn: "1h",
      })

      const verification_link = `${
        host.includes("localhost") ? "http" : "https"
      }://${host}/verification?email=${email}&token=${token}`

      // send link via email
      Mail(email, "Verify your account.", verification_link)

      // Return success response with token
      return res.status(200).send({
        message: "Verify link sent to you email!",
        token,
      })
    }

    res.status(409).send({ message: "User with this email not exists" })
  } catch (error) {
    res.status(500).json({ message: "Server error", error })
  }
}

exports.forgetPassword = async (req, res) => {
  try {
    const { email, host } = req.body

    // Check if user with the same email already exists
    const existingUser = await UserModel.findOne({ email })
    if (existingUser) {
      // Generate JWT token
      const token = jwt.sign({ userId: existingUser._id }, secret, {
        expiresIn: "1h",
      })

      const verification_link = `${
        host.includes("localhost") ? "http" : "https"
      }://${host}/verification?email=${email}&token=${token}`

      // send link via email
      Mail(email, "Reset you password", verification_link)

      // Return success response with token
      return res.status(200).send({
        message: "Reset password link sent to you email!",
        token,
      })
    }

    res.status(409).send({ message: "User with this email not exists" })
  } catch (error) {
    res.status(500).json({ message: "Server error", error })
  }
}

exports.resetPassword = async (req, res) => {
  try {
    const { email, password } = req.body

    // check if user is exists or not using email
    const existingUser = await UserModel.findOne({ email })
    if (!existingUser) {
      return res.status(404).send({
        message: "This account not found!",
      })
    }

    try {
      // update verification state
      const user = await UserModel.findOneAndUpdate(
        { email },
        { password: bcrypt.hashSync(password, 8) }
      )
      if (!user) {
        return res.status(404).send({ message: "User not found" })
      }
      return res.status(200).send({ message: "Password reseted successfully" })
    } catch (error) {
      return res.status(500).send({ message: "Error updating user" })
    }
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong!",
      error,
    })
  }
}
