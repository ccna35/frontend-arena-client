import { query } from "@/config/config";
import { User } from "@/types/types";

const getAllUsers = async (): Promise<User[]> => {
  const res = await query.get("users");

  return res.data;
};

const getOneUser = async (id: number): Promise<User[]> => {
  const res = await query.get(`users/${id}`);

  return res.data;
};

const signup = async (data: User): Promise<{ message: string; user: User }> => {
  const res = await query.post("/users/signup", data);

  return res.data;
};

const login = async (data: {
  email: string;
  password: string;
}): Promise<{ message: string; user: User }> => {
  const res = await query.post("/users/login", data);

  return res.data;
};

const updateUser = async (data: User): Promise<{ message: string }> => {
  const res = await query.put(`/users/${data.id}`, data);

  return res.data;
};

export const UserService = {
  signup,
  login,
  getAllUsers,
  getOneUser,
  updateUser,
};
