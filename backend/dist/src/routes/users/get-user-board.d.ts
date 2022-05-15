import { Request, Response } from 'express';
declare const getUserBoardHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getUserBoardHandler };
