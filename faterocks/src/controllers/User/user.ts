import {Request, Response} from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { CrudController } from '../CrudController';

export class UserController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error('Method not implemented.');
    }
    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        res.json({message: "GET /user works!"});
    }
    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error('Method not implemented.');
    }
    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error('Method not implemented.');
    }

}
