import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { userService } from './users.service'

interface Req extends Request {
  params: {
    userId: string
  }
}

const getUserHandler = async (req: Request, res: Response) => {
  const { params } = req as Req

  const userResponse = await userService().getUserProfile(params.userId)

  return res.status(StatusCodes.OK).send(userResponse)
}

export { getUserHandler }