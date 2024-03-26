import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../../models/Users'; 

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: IUser = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user: IUser | null = await User.findOne({ email });
    console.log(user,"userrr");
    
    if (!user) throw new Error("User not found");
    const passwordMatch: boolean = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new Error("Incorrect password");
    const token: string = jwt.sign({ userId: user._id }, "dWVfANWoYSa7KeWRsnz9OVmQyEF7FFg+", { expiresIn: "1h" });
    res.status(200).json({user, token });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
