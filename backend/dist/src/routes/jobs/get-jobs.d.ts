import { Request, Response } from 'express';
declare const getAllJobsHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getAllJobsHandler };
