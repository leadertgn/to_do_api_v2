// services/userService.js
import validator from 'validator';
import { User } from '../models/User.js';
import random4DigitsSecure from '../utils/emailCode.js';
import convert from '../utils/convertEnv.js';

export const register = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw { status: 400, message: "Données manquantes! Veuillez fournir les informations" };
  }

  if (!validator.isEmail(email)) {
    throw { status: 400, message: "Email invalide !" };
  }

  if (password.length < 6) {
    throw { status: 400, message: "Le mot de passe doit avoir au moins 6 caractères" };
  }

  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    throw { status: 409, message: "L'email ou username est déjà utilisé" };
  }

  const emailVerificationCode = random4DigitsSecure();
  const expirationMinutes = convert(process.env.EMAIL_VERIFICATION_EXPIRATION);
  const emailCodeExpireAt = new Date(Date.now() + expirationMinutes * 60 * 1000);

  const newUser = await User.create({
    username,
    email,
    password,
    emailVerificationCode,
    emailCodeExpireAt,
  });

  return {
    userId: newUser._id,
    username: newUser.username,
    email: newUser.email,
    emailCode: newUser.emailVerificationCode,
  };
};
