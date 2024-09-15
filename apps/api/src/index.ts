import express, { Request, Response } from 'express';
import { ingredients } from './data/ingredients';
import { recipes } from "./data/recipes";

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


app.get('/ingredients', (req: Request, res: Response) => {
    res.json(ingredients);
});

app.get('/recipes', (req: Request, res: Response) => {
    res.json(recipes);
});