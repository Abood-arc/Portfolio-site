// Post-build checks for things the dev server can't catch. Run after `npm run build`.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
const errors = []
const check = (ok, message) => {
  if (!ok) errors.push(message)
}

check(existsSync(join(dist, '_redirects')), 'dist/_redirects missing: Netlify deep links will 404')
check(existsSync(join(dist, 'og.jpg')), 'dist/og.jpg missing: link previews will have no image')
check(existsSync(join(dist, 'Abdullah_FS_CV.pdf')), 'dist/Abdullah_FS_CV.pdf missing: CV links will 404')

const html = readFileSync(join(dist, 'index.html'), 'utf8')
for (const needle of [
  '<title>Muhammad Abdullah Afaq — Full-stack developer</title>',
  '<meta name="description"',
  'og:image" content="https://abdullah-afaq.netlify.app/og.jpg"',
]) {
  check(html.includes(needle), `dist/index.html missing: ${needle}`)
}

const assetsDir = join(dist, 'assets')
const assets = readdirSync(assetsDir)
const js = assets
  .filter((f) => f.endsWith('.js'))
  .map((f) => readFileSync(join(assetsDir, f), 'utf8'))
  .join('\n')
check(!js.includes('/src/assets/'), 'built JS references /src/assets/: an image is a string path instead of an import')

const jpgs = assets.filter((f) => f.endsWith('.jpg'))
check(jpgs.length === 7, `expected 7 bundled jpgs (6 project + about), found ${jpgs.length}: ${jpgs.join(', ')}`)
for (const f of jpgs) {
  const kb = statSync(join(assetsDir, f)).size / 1024
  check(kb < 300, `${f} is ${Math.round(kb)} KB (limit 300)`)
}

if (errors.length) {
  console.error('dist check FAILED:\n- ' + errors.join('\n- '))
  process.exit(1)
}
console.log(`dist check passed: ${jpgs.length} images bundled, redirects, OG image and CV present`)
