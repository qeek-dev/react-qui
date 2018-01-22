import pathParse from 'path-parse'

export const importAllFiles = (ctx, cb) => ctx.keys().reduce((acc, curr) => {
  const p = pathParse(curr)
  const ext = p.ext.slice(1)
  if (!acc[ext]) acc[ext] = {}
  acc[ext][p.name] = ctx(curr)
  return acc
}, {})
