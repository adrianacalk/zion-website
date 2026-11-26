# Changelog

Newest changes at the top. One line per change is plenty.

## v2.6 — 2026-11-26
- Ministries: new "Baptisms, Weddings & Funerals" section (id life-events) above Cemetery, with jump-list link. Cream/white backgrounds after it re-alternated.

## v2.5 — 2026-11-26
- Footer "Follow us": added Instagram, YouTube and Church Center links on every page.

## v2.4 — 2026-11-25
- Calendar page: "Add to iPhone or Outlook" and "Add to Google Calendar" buttons (Planning Center share link).

## v2.3 — 2026-11-25
- VBS page: new middle and right photos (`images/vbs-sanctuary.jpg`, `images/vbs-campfire-singers.jpg`).

## v2.2 — 2026-11-25
- Google Analytics turned on: Measurement ID `G-QFN812B2KW` on every page.

## v2.1 — 2026-11-25
- Calendar page: Church Center calendar embed in place of the placeholder (Adriana).
- Rummage Sale: building is on London Street, across from the sanctuary (Adriana).
- Rummage Sale: Church Center list of upcoming shopping days (Rummage Sale category only),
  with the Facebook button kept below it for last-minute changes.

## v2.0 — 2026-11-24
- New menu: Home · Plan a Visit · Ministries · About ▾ (Team, Faith, History, Sermons) ·
  Events ▾ (Calendar, VBS, Ham Dinner, Rummage Sale) · Give. The separate "Plan a Visit"
  button is gone (Plan a Visit is now a regular menu item); Contact moved into Plan a Visit.
- New pages: `plan-a-visit.html` and `ministries.html` (long pages with a jump list at the top),
  `team.html`, `faith.html`, `sermons.html`, `vbs.html`.
- Removed `worship.html`, `contact.html`, `get-involved.html`, `kids.html`, `cemetery.html`;
  their content now lives in Plan a Visit, Ministries and VBS. All links updated.
- New wording drawn from the current zion-castroville.org pages (team names, statement of faith,
  LCMC, library, Alpha, Lent & Easter, VBS details), kept short. Missing details marked `TODO`.
- Missions grant application PDF added in a new `docs/` folder.
- CSS: jump list, narrow text sections, Faith list; removed the old menu button style.
- Updated `sitemap.xml`, README, cheat sheet and AI briefs for the new pages.

## v1.2 — 2026-11-24
- Luther Rose colors: blue `#1f4e8c` (main) and red `#b3202a` (accent).
- Color variables renamed by role: `--primary`, `--primary-dark`, `--accent`
  (were `--red`, `--red-dark`, `--green`); `section--green` is now `section--accent`.

## v1.1 — 2026-11-18
- Bigger header logo so its text reads better: 100px tall on wide screens, 76px on phones
  (`.logo img` in `css/style.css`). Trimmed the white border off `images/zion-logo-wide.png`.
- "Plan a Visit" menu button stays on one line.

## v1.0 — 2026-11-18
- First version of the static site: 11 pages (Home, Worship, Our History, Cemetery, Get Involved,
  Kids & Families, Calendar, Ham Dinner, Rummage Sale, Give, Contact) plus a 404 page.
- Wording and photos carried over from the approved multi-page mockup.
- One stylesheet (`css/style.css`), one small script (`js/main.js`), no build step.
- Search engine basics: page titles, descriptions, sharing previews, sitemap, robots.txt,
  schema.org church info on the home page.
- Google Analytics placeholder (`G-XXXXXXXXXX`) on every page.
- Open items marked `TODO` (see README "Still to do").
