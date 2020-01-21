import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import classesMoreThan5Students from "./classesMoreThan5Students.ts";
import { open, DB } from "https://deno.land/x/sqlite/mod.ts";

test("0596. Classes More Than 5 Students", async () => {
  const db: DB = await open("leetcode.db");

  setupData(db, []);
  assertEquals(classesMoreThan5Students(db), []);

  setupData(db, [{ student: "A", cource: "Math" }]);
  assertEquals(classesMoreThan5Students(db), []);

  const COURSES_DATA_1: Affiliation[] = [
    { student: "A", cource: "Math" },
    { student: "B", cource: "English" },
    { student: "C", cource: "Math" },
    { student: "D", cource: "Biology" },
    { student: "E", cource: "Math" },
    { student: "F", cource: "Computer" },
    { student: "G", cource: "Math" },
    { student: "H", cource: "Math" },
    { student: "I", cource: "Math" }
  ];
  setupData(db, COURSES_DATA_1);
  assertEquals(classesMoreThan5Students(db), ["Math"]);

  const COURSES_DATA_2: Affiliation[] = [
    { student: "A", cource: "Math" },
    { student: "B", cource: "English" },
    { student: "C", cource: "Math" },
    { student: "D", cource: "Biology" },
    { student: "E", cource: "Math" },
    { student: "F", cource: "Computer" }
  ];
  setupData(db, COURSES_DATA_2);
  assertEquals(classesMoreThan5Students(db), []);

  const COURSES_DATA_3: Affiliation[] = [
    { student: "A", cource: "Math" },
    { student: "B", cource: "Math" },
    { student: "C", cource: "Math" },
    { student: "D", cource: "Math" },
    { student: "E", cource: "Math" }
  ];
  setupData(db, COURSES_DATA_3);
  assertEquals(classesMoreThan5Students(db), ["Math"]);

  const COURSES_DATA_4: Affiliation[] = [
    { student: "A", cource: "Math" },
    { student: "A", cource: "Math" },
    { student: "A", cource: "Math" },
    { student: "A", cource: "Math" },
    { student: "A", cource: "Math" }
  ];
  setupData(db, COURSES_DATA_4);
  assertEquals(classesMoreThan5Students(db), []);

  const COURSES_DATA_5: Affiliation[] = [
    { student: "A", cource: "Math" },
    { student: "B", cource: "Math" },
    { student: "C", cource: "Math" },
    { student: "D", cource: "Math" },
    { student: "E", cource: "Math" },
    { student: "A", cource: "Computer" },
    { student: "B", cource: "Computer" },
    { student: "C", cource: "Computer" },
    { student: "D", cource: "Computer" },
    { student: "E", cource: "Computer" }
  ];
  setupData(db, COURSES_DATA_5);
  assertEquals(classesMoreThan5Students(db), ["Computer", "Math"]);

  db.close();
});

type Affiliation = {
  student: string;
  cource: string;
};

const setupData = (db: DB, data: Affiliation[]) => {
  db.query(`
  CREATE TABLE IF NOT EXISTS courses (student CHAR(1), class VARCHAR(255))
  `);
  db.query(`DELETE FROM courses`);

  data.forEach(({ student, cource }) => {
    db.query(
      "INSERT INTO courses (student, class) VALUES (?, ?)",
      student,
      cource
    );
  });
};
