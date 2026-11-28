# Changelog

Newest changes at the top. One line per change is plenty.

## v3.8 — 2026-11-28
- Ministries > Choirs: new bell choir photo images/bell-choir-practice.jpg (cropped to the top of her portrait photo); bell-choir.jpg kept in images/.

## v3.7 — 2026-11-28
- Ministries > Youth: new photo images/sunday-school-class.jpg (children with their teachers); sunday-school-kids.jpg kept in images/.

## v3.6 — 2026-11-28
- Fellowship photo alt text now names the Ham Dinner potato salad prep.
- Ministries > Fellowship: new photo images/fellowship-kitchen.jpg (replaces the quilt photo there; quilt.jpg kept in images/).

## v3.5 — 2026-11-28
- Footer Connect column on every page: removed the "Give online" link (Give stays in the menu).

## v3.4 — 2026-11-28
- Youth Sunday School now 8:45 to 9:45 am everywhere (Home, Plan a Visit, Ministries).

## v3.3 — 2026-11-28
- Docs only: README (file list, Live Server preview for videos and maps, Netlify plan, Still to do), CLAUDE.md and Cursor rules (call.html, _redirects, open items), cheat sheet (removed done items, pastor notice and redirect rows).

## v3.2 — 2026-11-28
- New temporary page call.html (Call to Pastoral Ministry), copied from the old site. Not in the menu; the pastor-search notices on Home and Team link to it. Added to sitemap. New _redirects file sends the old /call-page/ address to it. New CSS for video and map embeds.

## v3.1 — 2026-11-27
- Feature boxes (Home and Give): the thin top stripe is red on every box instead of alternating blue and red.

## v3.0 — 2026-11-27
- Homepage rewritten for search and three audiences (members, new neighbors, history visitors): new title and description, hero "Zion Lutheran" with "Worshiping together in historic Castroville since 1852", "Find your way in" boxes, "Happening at Zion" 2 by 2 (Advent, 175th, Rummage Sale, Fiorella Friday; Ham Dinner dropped), "Lutheran roots. Timeless liturgy." about section, schema sameAs links. New CSS class .features--two.

## v2.11 — 2026-11-27
- Footer on every page: Sunday schedule removed (now three columns), heading "Zion Lutheran", "Follow us" renamed "Connect", Love INC Medina Region link added.

## v2.10 — 2026-11-27
- Ministries: new "Love INC" section (id love-inc) after Food Pantry, with jump-list link. Missions Grant background now cream.

## v2.9 — 2026-11-26
- All buttons are solid blue (.btn) for consistency. The outline, ghost and light classes stay in the CSS for a later version.

## v2.8 — 2026-11-26
- Rummage Sale: location now names the youth building, the historic George L. Haass Store (text and storefront photo alt).

## v2.7 — 2026-11-26
- Ministries > Facilities: youth building now also named as the historic George L. Haass Store (about 1850).

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
