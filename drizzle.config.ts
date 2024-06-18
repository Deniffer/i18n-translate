import { vars } from "@/lib/env";
import type { Config } from "drizzle-kit";

export default {
  schema: "./database/schema.ts",
  out: "./drizzle",
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: vars.TURSO_URL,
    authToken: vars.TURSO_AUTH_TOKEN,
  },
  verbose: true,
  strict: true,
} satisfies Config;

