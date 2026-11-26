# Zion Lutheran Church website: brief for AI editors

## Purpose
Public website for Zion Lutheran Church, 1106 Fiorella St, Castroville, TX 78009
(organized January 29, 1852; 175th anniversary January 29, 2027).
Visitors are mostly local families, members, and newcomers checking Sunday times on a phone.
The owner is a volunteer: an experienced procedural programmer who is new to web design.
She edits words and photos by hand, so the code must stay simple, readable and well commented.

## File map
- `index.html` Home · `plan-a-visit.html` Plan a Visit (Sunday times, map, parking, worship, seasons, office contact)
- `ministries.html` Ministries (one long page: youth, studies, choirs, facilities, cemetery, library, Alpha, food pantry, missions grant)
- About: `team.html` Team · `faith.html` Faith (What We Believe) · `history.html` History · `sermons.html` Sermons
- Events: `calendar.html` Calendar · `vbs.html` VBS · `ham-dinner.html` Ham Dinner · `rummage-sale.html` Rummage Sale
- `give.html` Give · `404.html` not-found page (uses root paths like `/css/style.css` on purpose)
- `css/style.css` the only stylesheet (numbered sections; tokens at the top)
- `js/main.js` the only script (phone menu, drop-downs, footer year)
- `images/` all photos and the logo (`zion-logo-wide.png`, also the favicon)
- `docs/` downloadable files (`missions-grant-application.pdf`)
- `sitemap.xml`, `robots.txt`, `README.md`, `EDITING-CHEATSHEET.md`, `CHANGELOG.md`

Menu: Home · Plan a Visit · Ministries · About ▾ (Team, Faith, History, Sermons) ·
Events ▾ (Calendar, VBS, Ham Dinner, Rummage Sale) · Give. A section with one page has no drop-down.
Long pages (Plan a Visit, Ministries) have a jump list at the top; each link's `#name` matches a section's `id="name"`.

## Style tokens (defined in `css/style.css` `:root`)
- `--primary #1f4e8c` (Luther Rose blue) · `--primary-dark #173b6b` · `--accent #b3202a` (Luther Rose red) · `--cream #faf6ee` · `--white #ffffff`
- `--ink #2a2522` (text) · `--muted #6b645e` (captions) · `--line #e4ddd0` (borders)
- Fonts: Merriweather (headings, `--font-heading`), Open Sans (body, `--font-body`), from Google Fonts
- `--max-width 1040px`; body text 17px
- Reuse existing classes (`section`, `container`, `columns`, `grid`, `card`, `feature`, `highlight`, `btn`, `btn--outline`, `more-link`...) before inventing new ones.

## Rules
1. Plain HTML, CSS and a little vanilla JavaScript only. No frameworks, libraries, build tools, npm, or CSS preprocessors.
2. Mobile first: check every change at phone width (about 390px) as well as desktop. No sideways scrolling.
3. The HEADER and FOOTER blocks (between the `===== HEADER` / `===== FOOTER` comments) must stay identical on every page. If you change one, change all 13 pages. The only per-page difference allowed is which menu link has `aria-current="page"` (and its group button's `is-current` class).
4. Every `<img>` needs meaningful `alt` text plus `width` and `height`; add `loading="lazy"` to photos below the first screen.
5. Keep the comment markers and indentation style (2 spaces). Each content section starts with a `<!-- ===== NAME ===== -->` comment.
6. Every page keeps its own `<title>` ("Page | Zion Lutheran Church, Castroville TX"), meta description (~150 characters), canonical URL, Open Graph/Twitter tags, and the Google Analytics block. Add new pages to `sitemap.xml`.
7. Change only what was asked. Do not rewrite wording, restructure pages, or "improve" things that weren't requested.
8. Never invent facts (dates, times, names, prices, history). If something is unclear or needs updating, ask the owner to verify, and leave a `<!-- TODO: ... -->` comment.
9. Colors and fonts come from the CSS variables; don't hard-code new colors.
10. After a change, check that links and image paths still work (open `index.html` in a browser), then add a line to `CHANGELOG.md`.

## Known open items (search for TODO)
VBS registration link and confirm 2027 times (vbs.html), Church Center calendar embed (calendar.html),
parking, communion note, nursery, Lent/Easter 2027 dates (plan-a-visit.html), youth group, Ladies' Bible Study,
Altar Guild, choir rehearsal times, facility use, Alpha dates, food pantry needs (ministries.html),
council members, office staff, interim pastor (team.html), optional sermon embed (sermons.html),
verify Ham Dinner date vs. 2026 flyer, verify rummage sale location caption and map, verify 2026 band name (Joyful Noise),
schema.org `sameAs` (index.html). Google Analytics ID is set: `G-QFN812B2KW` (2 places per page). Giving link: https://zion-castroville.churchcenter.com/giving
