export interface IPost {
  _id?: string;
  userId: string;
  text: string;
  image?: string;
  comments?: { text: string; userId: string; _id: string }[];
  likes?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
