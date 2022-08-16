import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const port = 3003;

app.get('/', (req: Request, res: Response) => {          
    res.send("Hello from Express");
})




app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});

