// Runs `vitest run`, always launching it through the canonical (real-case) project path.
//
// Why this exists: on Windows the working directory can arrive with a lower-case drive
// letter ("c:\...") -- VS Code does this, and so does a shell that has been reset to the
// project folder. npm then builds the path to the vitest program from that spelling, so
// vitest starts from c:\...\node_modules while the test files resolve "vitest" from
// C:\...\node_modules. Node treats those as two different modules, the test files talk to
// a copy that was never set up, and every file fails with "no tests"
// (TypeError: Cannot read properties of undefined (reading 'config')).
//
// This file uses only Node built-ins, so it cannot create a duplicate itself.
// Extra arguments are passed through: `npm test -- tests/data.test.js -t "some name"`.
import { spawnSync } from 'node:child_process'
import { realpathSync } from 'node:fs'
import { join } from 'node:path'

const root = realpathSync.native(process.cwd())
const vitest = join(root, 'node_modules', 'vitest', 'vitest.mjs')

const result = spawnSync(process.execPath, [vitest, 'run', ...process.argv.slice(2)], {
  cwd: root,
  stdio: 'inherit',
})

process.exit(result.status ?? 1)
