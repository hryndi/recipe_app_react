export type TFetchedRecepies = {
  from: number;
  to: number;
  count: number;
  _links: Links;
  hits: HitsObj[];
};
export type TDataState = {
  calories: number;
  images: RecipeImages;
  ingredientLines: string[];
  label: string;
  mealType: string;
};

interface Links {
  next: {
    href: string;
    title: string;
  };
}

export interface HitsObj {
  recipe: TRecipeObj;
  links: RecipeLinks;
}

type TRecipeObj = {
  uri: string;
  label: string;
  image: string;
  images: RecipeImages;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: RecipeIngredients[];
  calories: number;
  totalCO2Emissions: number;
  co2EmissionsClass: string;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: RecipeTotalNutrients;
  totalDaily: TotalDaily;
  digest: Record<string, unknown>[];
};
interface RecipeLinks {
  self: {
    href: string;
    title: string;
  };
}
interface RecipeImages {
  THUMBNAIL: RecipeImagesObj;
  SMALL: RecipeImagesObj;
  REGULAR: RecipeImagesObj;
}
interface RecipeImagesObj {
  url: string;
  width: string;
  height: string;
}

interface RecipeIngredients {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}

interface Nutrient {
  label: string;
  quantity: number;
  unit: string;
}

interface RecipeTotalNutrients {
  ENERC_KCAL: Nutrient;
  FAT: Nutrient;
  FASAT: Nutrient;
  FATRN: Nutrient;
  FAMS: Nutrient;
  FAPU: Nutrient;
  CHOCDF: Nutrient;
  CHOCDF_net: Nutrient;
  FIBTG: Nutrient;
  SUGAR: Nutrient;
  PROCNT: Nutrient;
  CHOLE: Nutrient;
  NA: Nutrient;
  CA: Nutrient;
  MG: Nutrient;
  K: Nutrient;
  FE: Nutrient;
  ZN: Nutrient;
  P: Nutrient;
  VITA_RAE: Nutrient;
  VITC: Nutrient;
  THIA: Nutrient;
  RIBF: Nutrient;
  NIA: Nutrient;
  VITB6A: Nutrient;
  FOLDFE: Nutrient;
  FOLFD: Nutrient;
  FOLAC: Nutrient;
  VITB12: Nutrient;
  VITD: Nutrient;
  TOCPHA: Nutrient;
  VITK1: Nutrient;
  WATER: Nutrient;
}

interface DailyNutrient {
  label: string;
  quantity: number;
  unit: string;
}

interface TotalDaily {
  ENERC_KCAL: DailyNutrient;
  FAT: DailyNutrient;
  FASAT: DailyNutrient;
  CHOCDF: DailyNutrient;
  FIBTG: DailyNutrient;
  PROCNT: DailyNutrient;
  CHOLE: DailyNutrient;
  NA: DailyNutrient;
  CA: DailyNutrient;
  MG: DailyNutrient;
  K: DailyNutrient;
  FE: DailyNutrient;
  ZN: DailyNutrient;
  P: DailyNutrient;
  VITA_RAE: DailyNutrient;
  VITC: DailyNutrient;
  THIA: DailyNutrient;
  RIBF: DailyNutrient;
  NIA: DailyNutrient;
  VITB6A: DailyNutrient;
  FOLDFE: DailyNutrient;
  VITB12: DailyNutrient;
  VITD: DailyNutrient;
  TOCPHA: DailyNutrient;
  VITK1: DailyNutrient;
}

interface RecipeSub {
  label: string;
  tag: string;
  schemaOrgTag: string | null;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
}
