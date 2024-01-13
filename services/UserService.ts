import { User } from "@/types/types";
import axios from "axios";

const query = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

const getAllUsers = async (page: number = 0): Promise<User[]> => {
  const res = await query.get(`users?page=${page}`);

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
