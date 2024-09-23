import cors from 'cors';
import express, { Request, Response } from 'express';
import { ingredients } from './data/ingredients';
import { recipes } from "./data/recipes";

const app = express();
app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/ingredients', (req: Request, res: Response) => {
    res.status(200).json(ingredients);
});

app.get('/recipes', (req: Request, res: Response) => {
    res.status(200).json(recipes);
});