import { Request, Response } from 'express';
declare const getUserHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getUserHandler };
