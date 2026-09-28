"""One-off: crop the real screenshots out of the FL-03 curation document pages.

The source pages live in docs/ (gitignored). Re-run only if an image needs regenerating:
    python scripts/extract-images.py
"""
import glob
import os

from PIL import Image

PAGES = sorted(glob.glob('docs/FL03_Image_Curation_Muhammad_Abdullah_Combined/*.jpg'))
assert len(PAGES) == 16, f'expected 16 curation pages, found {len(PAGES)}'


def page(n):
    return Image.open(PAGES[n - 1]).convert('RGB')


def save(img, path, max_w=1600):
    if img.width > max_w:
        img = img.resize((max_w, round(img.height * max_w / img.width)), Image.LANCZOS)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path, 'JPEG', quality=82, optimize=True, progressive=True)
    print(f'{path}  {img.size[0]}x{img.size[1]}  {os.path.getsize(path) // 1024} KB')


# (page number, crop box in page pixels: left, top, right, bottom)
CROPS = {
    'src/assets/projects/qubix-storefront.jpg': (4, (240, 446, 2310, 1490)),
    'src/assets/projects/qubix-admin.jpg': (9, (240, 326, 2310, 1414)),
    'src/assets/projects/qubix-saudi.jpg': (10, (240, 330, 2310, 1412)),
    'src/assets/projects/tassawur.jpg': (11, (240, 447, 2310, 2016)),
    'src/assets/projects/sublingo.jpg': (7, (240, 323, 2310, 1617)),
}
for out, (n, box) in CROPS.items():
    save(page(n).crop(box), out)

# HeartSync: portrait photo of two phones -> centre it on a 16:10 canvas of the same black.
phones = page(5).crop((734, 640, 1816, 1770))
phones = phones.resize((round(phones.width * 1000 / phones.height), 1000), Image.LANCZOS)
canvas = Image.new('RGB', (1600, 1000), phones.getpixel((5, 5)))
canvas.paste(phones, ((1600 - phones.width) // 2, 0))
save(canvas, 'src/assets/projects/heartsync.jpg')

# About portrait.
save(page(16).crop((555, 447, 1995, 2368)), 'src/assets/about.jpg', max_w=800)

# Open Graph card: 1200x630 centre crop of the storefront.
hero = page(4).crop((240, 446, 2310, 1490))
hero = hero.resize((round(hero.width * 630 / hero.height), 630), Image.LANCZOS)
left = (hero.width - 1200) // 2
save(hero.crop((left, 0, left + 1200, 630)), 'public/og.jpg', max_w=1200)
