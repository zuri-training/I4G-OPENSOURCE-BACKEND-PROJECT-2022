import express,{json,urlencoded, Request, Response} from "express";
import helmet from "helmet";
import cors from "cors";
import { cloudinary } from "./utils/helpers";


const app = express();

app.use(json({ limit: '50kb' }))
   .use(urlencoded({extended: true, limit: '50kb' }))
   .use(helmet())
   .use(cors())
   .use("*", cloudinary)

app.get("/test", (req: Request, res: Response) => {
    res.status(200).json({
        message: "server works"
    })
})

export default app;
