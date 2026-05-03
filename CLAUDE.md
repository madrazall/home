# Madrazall Built — Project Notes

## What this is
Jekyll site for madrazallbuilt.com (no domain purchased yet). Currently live at:
**https://madrazall.github.io/home/**

Remote: `https://github.com/madrazall/home.git` (repo named `home`, branch `main`)

## Jekyll structure
- `_layouts/default.html` — base layout (CSS, nav/footer includes, reveal script)
- `_layouts/post.html` — individual blog post layout
- `_includes/nav.html` — shared nav bar
- `_includes/footer.html` — shared footer
- `_posts/` — blog posts (filename format: `YYYY-MM-DD-slug.md`)
- `blog/index.html` — blog listing page
- `index.html` — home page (plain HTML, no Jekyll front matter, Liquid won't process here)
- `assets/images/` — project images

## GitHub Pages: project site rules
This is a **project site** (repo name `home`, not `madrazall.github.io`), so:
- `baseurl: "/home"` in `_config.yml` — do not change this to `""` or the domain
- `url: "https://madrazall.github.io"` in `_config.yml`
- All internal Jekyll links must use `{{ site.baseurl }}` prefix, e.g. `{{ site.baseurl }}{{ post.url }}`
- Image paths in `index.html` are plain relative paths (e.g. `assets/images/project01.jpg`) since that file has no front matter

## Known outstanding item
- `blog/index.html` contributor form action is still `https://formspree.io/f/YOUR_FORM_ID` — needs a real Formspree ID before the form works
