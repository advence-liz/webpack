export function log (m: string): string {
  return m
}

function func ({ m = 'liz', n = 1 }: { m: string; n: number }): void {
  console.log(m, n)
}
// func({})
