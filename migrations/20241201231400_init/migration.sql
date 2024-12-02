PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "Reserva" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "finalidade" TEXT NOT NULL DEFAULT 'Mudança 1',
    "moradorApartamento" TEXT NOT NULL,
    "moradorNome" TEXT NOT NULL,
    "dia" DATETIME NOT NULL,
    "hora" DATETIME NOT NULL,
    "concluido" BOOLEAN NOT NULL DEFAULT false
);
CREATE UNIQUE INDEX "Reserva_finalidade_dia_key" ON "Reserva"("finalidade", "dia");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
