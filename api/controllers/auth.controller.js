import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

    // Create a new user instance with the hashed password
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ success: true, message: 'User created successfully!' });
  } catch (error) {
    // Handle errors
    next(error);
  }
};
