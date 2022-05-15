import { UserModel } from "../../lib/lib-domain-model/users.model"
import { UserBoardModel } from "../../lib/lib-domain-model/user-board.model"

export const userService = () => {
  const userModel: UserModel = new UserModel()
  const userBoardModel: UserBoardModel = new UserBoardModel()

  const getUserProfile = async (userId: string) => {
    return await userModel.getUserProfile(userId)
  }

  const getUserBoard = async (userId: string) => {
    return await userBoardModel.getUserBoard(userId)
  }

  return { getUserProfile, getUserBoard }
}
