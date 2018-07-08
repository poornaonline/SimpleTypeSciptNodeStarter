import express from 'express';
import {Request, Response} from 'express';

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("/user", (req: Request, res: Response) => {
    res.send({
        FirstName : "Poorna",
        LastName : "Jayasinghe"
    });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})