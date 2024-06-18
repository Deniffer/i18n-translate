// import { vars } from "@/lib/env";
// import { getLogger } from "@/lib/logging";
// import { createClient } from "@libsql/client";
// import { createClient as createClientWeb } from "@libsql/client/web";

// export const client =
//   vars.ENV === "dev" ? ceateLocalClient() : createLibSqlWebClient();

// function ceateLocalClient() {
//   const url = "file:local.db";
//   getLogger().info("create libsql local client", {
//     url,
//   });
//   return createClient({ url });
// }

// function createLibSqlWebClient() {
//   getLogger().info("create libsql web client", {
//     url: vars.TURSO_URL,
//   });

//   return createClientWeb({
//     url: vars.TURSO_URL,
//     authToken: vars.TURSO_AUTH_TOKEN,
//   });
// }

