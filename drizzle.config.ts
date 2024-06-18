import { vars } from "@/lib/env";
import type { Config } from "drizzle-kit";

export default {
  schema: "./database/schema.ts",
  out: "./drizzle",
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: vars.ENV === "prod" ? vars.TURSO_DATABASE_URL : "file:./local.db",
    authToken: vars.TURSO_AUTH_TOKEN,
  },
  verbose: true,
  strict: true,
} satisfies Config;

