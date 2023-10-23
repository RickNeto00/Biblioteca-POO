/*
  Warnings:

  - The required column `publicId` was added to the `Author` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Author" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "publicId" TEXT NOT NULL
);
INSERT INTO "new_Author" ("age", "id", "name") SELECT "age", "id", "name" FROM "Author";
DROP TABLE "Author";
ALTER TABLE "new_Author" RENAME TO "Author";
CREATE UNIQUE INDEX "Author_id_key" ON "Author"("id");
CREATE UNIQUE INDEX "Author_publicId_key" ON "Author"("publicId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
