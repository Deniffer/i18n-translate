import * as v from "valibot";

const schema = v.object({
  ENV: v.optional(v.picklist(["prod", "dev"]), "dev"),
  TURSO_URL: v.string(),
  TURSO_AUTH_TOKEN: v.string(),
  LOG_LEVEL: v.optional(v.picklist(["info", "debug", "trace"]), "info"),
});
export const vars = v.parse(schema, process.env);

