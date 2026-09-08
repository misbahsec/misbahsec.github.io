# misbahsec.github.io

Personal portfolio and research website for Misbah Al Mamun, focused on machine
learning, NLP, low-resource language technology, datasets, and audio research.

Live site: **https://misbahsec.github.io/**

## Contents

```
index.html              Home, research summary, news, social links, and CV button
background.html         Education, thesis, technical skills, and CV download
publications.html       Publications and research status
datasets.html           Research datasets and corpora
projects.html           Code, demos, and software projects
achievements.html       Service, honors, and leadership
Misbah_Al_Mamun_CV.pdf  Current CV
assets/style.css        Shared responsive styling and theme variables
assets/site.js          Theme toggle, active nav, mobile menu, and interactions
images/profile.jpg      Profile portrait
```

## Features

- Responsive desktop, tablet, and mobile layouts
- Collapsible mobile navigation with hamburger and close states
- Light and dark theme toggle
- Shared footer navigation between all pages
- Homepage CV button and downloadable PDF on the Background page
- Scroll-reveal sections and expandable older-news entries
- No framework, build tool, or server-side runtime required

## Deployment

This is a static GitHub Pages site served from the `main` branch root. Updates
are published by committing changes and pushing to GitHub:

```bash
git add .
git commit -m "Describe the update"
git push origin main
```

Repository: https://github.com/misbahsec/misbahsec.github.io

## Updating the site

Add new news entries near the top of the news section in `index.html`:

```html
<div class="newsitem">
  <div class="newsdate">Mar 2027</div>
  <p class="newsbody">Paper accepted at <em>VENUE</em> — <em>Title</em>.</p>
</div>
```

Keep page navigation and shared behavior consistent by editing
`assets/style.css` and `assets/site.js`. Update `Misbah_Al_Mamun_CV.pdf` in the
repository whenever the CV changes; the existing site links will continue to
use the same filename.
