import { defineConfig } from "drizzle-kit"
import * as dotenv from "dotenv"

dotenv.config()

if (!process.env.DB_URI) {
  throw new Error("DB_URI environment variable is not set");
}

export default defineConfig({
  schema: "./packages/db/schema/index.ts",
  out: "./packages/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URI!,
  }
})
