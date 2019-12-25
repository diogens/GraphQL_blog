import { UserModel } from "../models/UserModel";
import { PostModel } from "../models/PostModel";
import { CommentModel } from "../models/CommentModel";

export interface ModelsInterfaces {
  Comment: CommentModel;
  Post: PostModel;
  User: UserModel;
}
