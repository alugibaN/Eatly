import { ResolveOptions } from "webpack"

export function buildResolve():ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'] //файлы у которых при импорте не будет указываться разрешение 
  }
}