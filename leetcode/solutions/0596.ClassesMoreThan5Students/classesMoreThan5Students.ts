import { DB } from "https://deno.land/x/sqlite/mod.ts";

// This SQL is the solution
const solutionSQL = `
SELECT class FROM courses GROUP BY class HAVING COUNT(DISTINCT student) >= 5
`;

// I created this function and its test just for exercise :)
export default function classesMoreThan5Students(db: DB): string[]
  | undefined
{
  return [...db.query(solutionSQL)].map(([classes]) => {
    return classes;
  }).sort();
}
