import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

interface Ingredient {
    name: string;
    quantity?: number
}
  
const ingredients: Ingredient[] = [
    { name: 'Argent', quantity: 12 },
    { name: 'Bave de lama' },
    { name: 'Épine de hérisson' },
    { name: 'Plume de griffon' },
    { name: 'Hélium liquide' },
    { name: 'Poil de yéti' },
    { name: 'Or' },
    { name: 'Azote liquide' },
    { name: 'Queue d\'écureuil' },
    { name: 'Crin de licorne' },
    { name: 'Jus de Horglup' },
    { name: 'Noix de coco' },
    { name: 'Yttrium' },
    { name: 'Mandragore' }
];

// const ingredientsMiddleware = (req: Request, res: Response) => {
//     res.json({ ingredients });
// };
  
  
// app.use('/ingredients', ingredientsMiddleware);

app.get('/ingredients', (req: Request, res: Response) => {
    res.json(ingredients);
});