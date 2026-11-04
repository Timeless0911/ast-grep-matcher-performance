/**
 * A module specifier found in a declaration file.
 *
 * `s` and `e` are UTF-16 offsets of the specifier text inside the quotes,
 * which is what MagicString expects.
 */
export interface ModuleMatch {
  n: string;
  s: number;
  e: number;
}
