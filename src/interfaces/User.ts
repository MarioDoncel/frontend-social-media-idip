export interface IUser {
  _id?: string;
  id?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  telephone: string;
  email: string;
  emailVerified: boolean;
  password?: string;
  profileImage?: string;
  followings: string[];
  followers: string[];
  postsTenLast: string[];
}
