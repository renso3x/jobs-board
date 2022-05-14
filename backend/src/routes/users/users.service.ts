import { UserModel } from "../../lib/lib-domain-model/users.model";

export const userService = () => {
  const userModel: UserModel = new UserModel()

  const getUserProfile = async (userId: string) => {
    return await userModel.getUserProfile(userId)
  }

  return {
    getUserProfile
  }
}