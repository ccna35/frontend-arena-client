export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
  createdAt?: string;
};

export type Submission = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
  createdAt?: string;
};

export type Feedback = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
  createdAt?: string;
};

export type Challenge = {
  id: number;
  challenge_title: string;
  createdAt: string;
  challenge_description: string;
  extra_tips: string;
  figma: string;
  levelName: string;
  brief_description: string;
  challenge_images: string;
  languages: string;
  featured_image: string;
  desktop_image: string;
  tablet__image: string;
  smartphone__image: string;
};

export type QuickStats = {
  challenges_count: number;
  users_count: number;
  feedbacks_count: number;
  submissions_count: number;
};
