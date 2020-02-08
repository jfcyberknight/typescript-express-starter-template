import { Controller, Delete, Get, Middleware, Post, Put } from "@overnightjs/core";
import { NextFunction, Request, Response } from "express";
import { BAD_REQUEST, OK } from "http-status-codes";
import { EmailValidator } from "../validation/EmailValidator";

@Controller("api/validation")
export class ValidationController {

    private EmailValidator = new EmailValidator();

    @Get("email/:email")
    public get(req: Request, res: Response): any {
        // tslint:disable-next-line:no-console
        console.log(req.query.email);
        // tslint:disable-next-line: no-console
        console.log(req.params.email);
        return res.status(OK).json(this.EmailValidator.isAcceptable(req.params.email));
    }
}
