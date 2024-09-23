import { Ingredient } from "./ingredients"

export interface Recipe {
    potion: string,
    ingredients: Ingredients[],
    time?: number,
    id?: number,
    description?: string,
    appliance?: string,
    ustensils?: string[]

}

export interface Ingredients extends Ingredient {
    unit?: string
}

export const recipes: Recipe[] = [
    {
        potion: "Potion d'invisibilité",
        ingredients: [
            {
                ingredient: "Noix de coco",
                quantity: 120,
                unit: 'ml'
            },
            {
                ingredient: "Yttrium",
                quantity: 12,
                unit: "ml"
            },
            {
                ingredient: "Mandragore",
                quantity: 12,
                unit: "feuilles"
            }
        ],
        description:"",
        appliance:"",
        ustensils:[]
    },
    {
        potion: "Potion d'amour",
        ingredients: [
            {
                ingredient: "Bave de lama",
                quantity: 100,
                unit: "ml"
            },
            {
                ingredient: "Plume de griffon",
                quantity: 3,
                unit: "plumes"
            },
            {
                ingredient: "Hélium liquide",
                quantity: 10,
                unit: "ml"
            }
        ],
        description:"",
        appliance:"",
        ustensils:[]
    },
    {
        potion: "Potion de jeunesse",
        ingredients: [
            {
                ingredient: "Or",
                quantity: 4,
                unit: "lingots"
            },
            {
                ingredient: "Crin de licorne",
                quantity: 12,
                unit: "crins"
            },
            {
                ingredient: "Azote liquide",
                quantity: 200,
                unit: "ml"
            }
        ],
        description:"",
        appliance:"",
        ustensils:[]
    },
    {
        potion: "Potion d'immortalité",
        ingredients: [
            {
                ingredient: "Poil de yéti",
                quantity: 3,
                unit: "poils"
            },
            {
                ingredient: "Jus de Horglup",
                quantity: 100,
                unit: "ml"
            },
            {
                ingredient: "Argent",
                quantity: 12,
                unit: "lingots"
            }
        ],
        description:"",
        appliance:"",
        ustensils:[]
    },
    {
        potion: "Potion de Clairvoyance",
        ingredients: [
            {
                ingredient: "Épine de hérisson",
                quantity: 1,
                unit: "épine"
            },
            {
                ingredient: "Jus de Horglup",
                quantity: 10,
                unit: "ml"
            },
            {
                ingredient: "Noix de coco",
                quantity: 4,
                unit: "noix"
            }
        ],
        description:"",
        appliance:"",
        ustensils:[]
    },
    {
        potion: "Potion de Force",
        ingredients: [
            {
                ingredient: "Poil de yéti",
                quantity: 100,
                unit: "poils"
            },
            {
                ingredient: "Or",
                quantity: 45,
                unit: "lingots"
            },
            {
                ingredient: "Argent",
                quantity: 5,
                unit: "lingots"
            }
        ],
        description:"",
        appliance:"",
        ustensils:[]
    },
    {
        potion: "Potion de Vitesse",
        ingredients: [
            {
                ingredient: "Hélium liquide",
                quantity: 10,
                unit: "ml"
            },
            {
                ingredient: "Plume de griffon",
                quantity: 0.5,
                unit: "plume"
            },
            {
                ingredient: "Azote liquide",
                quantity: 1,
                unit: "ml"
            }
        ],
        description:"",
        appliance:"",
        ustensils:[]
    },
    {
        potion: "Potion de Guérison",
        ingredients: [
            {
                ingredient: "Crin de licorne",
                quantity: 13,
                unit: "crins"
            },
            {
                ingredient: "Mandragore",
                quantity: 4,
                unit: "feuilles"
            },
            {
                ingredient: "Bave de lama",
                quantity: 13,
                unit: "ml"
            }
        ],
        description:"",
        appliance:"",
        ustensils:[]
    },
    {
        potion: "Potion de Transformation",
        ingredients: [
            {
                ingredient: "Queue d'écureuil",
                quantity: 12,
                unit: "queue"
            },
            {
                ingredient: "Yttrium",
                quantity: 18,
                unit: "ml"
            },
            {
                ingredient: "Épine de hérisson",
                quantity: 6,
                unit: "épines"
            }
        ],
        description:"",
        appliance:"",
        ustensils:[]
    }
]