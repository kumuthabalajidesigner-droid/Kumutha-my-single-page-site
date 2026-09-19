# Kumutha Balaji — Personal Website

A static portfolio site. No build step, no framework: open `index.html` in a browser.

## Files
| Path | What it is |
|---|---|
| `index.html` | Page structure and all text content |
| `assets/css/styles.css` | All styling. Colors are tokens in `:root` at the top; dark-mode tokens follow |
| `assets/js/main.js` | The "Ask about my work" chat panel (edit the `qa` list) |
| `favicon.svg` | Browser-tab icon (KB monogram) |
| `content/profile.md` | Source profile the content was written from |
| `single-file-version.html` | Same site in one file, handy for quick sharing |

## Editing
- **Text:** search `index.html` for the section id: `about`, `impact`, `capabilities`, `experience`, `toolkit`, `contact`.
- **Colors:** change `--teal`, `--mint`, and `--hero-a` … `--hero-d` in `styles.css`.
- **Font:** Geist from Google Fonts, linked in the `<head>` of `index.html`.
- **Email/links:** search for `mailto:`, `linkedin.com`, `linktr.ee`.

## Publishing (free options)
1. **Netlify Drop:** go to app.netlify.com/drop and drag this whole folder in.
2. **GitHub Pages:** create a repo named `<username>.github.io`, upload the folder contents, and the site goes live at that address.
3. **Vercel / Cloudflare Pages:** import as a static site; no build command needed, output directory is the root.

Add a custom domain (e.g. kumuthabalaji.com) in any of these dashboards.
