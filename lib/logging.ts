import { vars } from "@/lib/env";
import { consola } from "consola";

const LogLevels = {
  fatal: 0,
  error: 0,
  warn: 1,
  log: 2,
  info: 3,
  success: 3,
  fail: 3,
  ready: 3,
  start: 3,
  box: 3,
  debug: 4,
  trace: 5,
};

consola.level = LogLevels[vars.LOG_LEVEL];

export function getLogger() {
  return consola;
}

