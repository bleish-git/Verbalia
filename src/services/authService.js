import users from '../../assets/users.json';
import bcrypt from 'bcryptjs';

export const login = (email, password) => {
  const user = users.find(u => u.email === email);

  if (!user) return null;

  const isValid = bcrypt.compareSync(password, user.password);

  return isValid ? user : null;
};