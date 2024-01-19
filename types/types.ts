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

export type Challenge = {
  challenge_title: string;
  id: number;
  createdAt: string;
  challenge_description: string;
  extra_tips: string;
  figma: string;
  featured_image: string;
  levelName: string;
  brief_description: string;
  challenge_images: string;
  languages: string;
};

export type QuickStats = {
  challenges_count: number;
  users_count: number;
  feedbacks_count: number;
  submissions_count: number;
};
