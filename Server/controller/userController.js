import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';



const newUser = async (req, res) => {

  const { role, firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'All feilds are required' });
  };

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    role,
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  try {

    await newUser.save();

    return res.status(200).json({ message: 'Signup successfully' });

  } catch (error) {
    next(error);
  };
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    return res.status(400).json({ message: 'All feilds are required' });
  };

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return res.status(404).json({ message: 'User not found' });
    };

    const validPassword = bcrypt.compareSync(password, validUser.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid Password' });

    };

    const token = jwt.sign(
      { id: validUser._id }, 'cui',
    );

    const { password: pass, ...rest } = validUser._doc;

    res.status(200).cookie('access_token', token, {
      httpOnly: true
    }).json(rest);


  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {

    const userId = req.user.userId;


    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    res.status(200).json(user);

  } catch (error) {
    next(error);
  }
};


export { newUser, login, getUser };
