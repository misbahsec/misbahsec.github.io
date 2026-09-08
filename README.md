# misbahsec.github.io

Personal research site for Misbah Al Mamun. Static HTML, no build step required
to deploy — `build.py` is only there if you'd rather regenerate all six pages
from one shared shell.

```
index.html          Home — hero, swara signature, about, news feed
background.html     Education, thesis, technical skills, CV download
publications.html   Peer-reviewed / under review / in progress
datasets.html       The three corpora
projects.html       Code and demos
achievements.html   Service, honors, leadership
assets/style.css    All styling (colours and fonts are CSS variables at the top)
assets/site.js      Active nav link, scroll reveal, "show older news" toggle
images/profile.jpg  Your portrait — see images/README.txt
```

## Deploy

1. Create a repository named exactly **`misbahsec.github.io`**. The name must
   match your username or Pages won't serve it at the root domain.
2. Push everything in this folder to the `main` branch.
3. Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`.
4. Live at `https://misbahsec.github.io/` in a minute or two.

```bash
git init
git add .
git commit -m "Add research site"
git branch -M main
git remote add origin https://github.com/misbahsec/misbahsec.github.io.git
git push -u origin main
```

The repository must be **public** — GitHub Pages only serves private repos on
paid plans.

## Keeping it current

The news feed is the part that decays fastest. Every time something happens,
add one entry at the top of the `.news` block in `index.html`:

```html
<div class="newsitem">
  <div class="newsdate">Mar 2027</div>
  <p class="newsbody">Paper accepted at <em>VENUE</em> — <em>Title</em>.</p>
</div>
```

Entries with `class="newsitem olddated"` are hidden behind the "Show older
news" button. Move items down into that group as they age.

**When a manuscript is accepted:** in `publications.html`, move the `<article>`
block from "Under review" into "Peer-reviewed", change the tag from
`tag rev` to `tag pub`, and add the author list, venue and DOI.

## Two things to fix

- **Add exact months** to the year-only news entries. A precise date reads as a
  real timeline; a bare year reads as filler.
- **Thesis feature count.** Your CV says *six* acoustic feature representations
  in the thesis line and *five* in the swara research entry. The site avoids the
  number until you settle which is right — then put it back in both places.
