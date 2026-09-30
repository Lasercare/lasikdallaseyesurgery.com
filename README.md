# LASIK Dallas Eye Surgery — Modern Static Website

This folder is ready to publish with GitHub Pages. It contains a complete multi-page static site with no build step or JavaScript package dependencies.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload everything in this folder to the repository root.
3. Open **Settings → Pages** in GitHub.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and the `/ (root)` folder, then save.

The page uses a Google Font. The rest of the site, including the hero image, is stored locally in this folder.

## Files

- `index.html` — homepage
- `styles.css` — visual design and responsive layouts
- `script.js` — homepage mobile navigation and current year
- `site-pages.js` — shared content and navigation for the interior pages
- `assets/lasik-hero.png` — original hero artwork
- `about/`, `contact-us/`, `privacy-policy/` — primary pages
- `articles/` — six complete patient guides
- `category/`, `tag/`, `author/`, `2010/`, `2011/` — legacy browsing routes
- `search.html` — instant article search

## Before launch

Review all medical copy, business details, outbound links, privacy language, and legal requirements with the clinic. The contact form prepares an email in the visitor's email application because GitHub Pages does not provide server-side form handling.
