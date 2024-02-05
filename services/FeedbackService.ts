import { query } from "@/config/config";
import { User } from "@/types/types";

const getAllFeedbacksBySubmission = async (): Promise<User[]> => {
  const res = await query.get("feedbacks");

  return res.data;
};
const getAllFeedbacks = async (): Promise<User[]> => {
  const res = await query.get("feedbacks/all");

  return res.data;
};

const getOneFeedback = async (id: number): Promise<User[]> => {
  const res = await query.get(`users/${id}`);

  return res.data;
};

const updateUser = async (data: User): Promise<{ message: string }> => {
  const res = await query.put(`/users/${data.id}`, data);

  return res.data;
};

export const FeedbackService = { getAllFeedbacks, getAllFeedbacksBySubmission };
