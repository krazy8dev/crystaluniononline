export interface User {
  _id: string;
  fullName: string;
  email: string;
  accountNumber: string;
  balance: number;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UserProfileResponse {
  token: string;
  data: {
    user: User;
  };
}
