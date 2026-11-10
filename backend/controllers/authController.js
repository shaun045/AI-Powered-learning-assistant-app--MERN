import jwt from "jsonwebtoken";
import User from "../models/User.js";


//Generate JWT token
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });
};


// @desc Register new user
// @route POST /api/auth/register
// @access Public
export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    //Check if user exists
    const userExists = await User.findOne({ $or: [{email}] });

    if (userExists) {
      return res.status(400).json({
        success: false,
        error: 
          userExists.email === email
            ? "Email already registered"
            : "Username already taken",
          statusCode: 400,
      });
    }

    //Create User
    const user = await User.create({
      username,
      email,
      password,
    });

    
  } catch (error) {
    next(error);
  }
};

// @desc Login user
// @route POST /api/auth/register
// @access Public
export const login = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
};


// @desc Get user Profile
// @route POST /api/auth/register
// @access Private
export const getProfile = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
};



// @desc Update user Profile
// @route POST /api/auth/register
// @access Private
export const updateProfile = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
};


// @desc Change password
// @route POST /api/auth/register
// @access Private
export const changePassword = async (req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
};