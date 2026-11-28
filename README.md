<!--
  DOMAIN NOTE: this site assumes its web address will be https://zion-castroville.org
  That address appears in every page's <head> (canonical, og:url, og:image, twitter:image),
  in the schema.org block on index.html, in sitemap.xml and in robots.txt.
  To change it: Find & Replace "https://zion-castroville.org" with the new address
  across all files (no slash at the end).
-->

# Zion Lutheran Church website

The website for Zion Lutheran Church, 1106 Fiorella St, Castroville, Texas.

It is plain HTML and CSS: no frameworks, no build step, nothing to install.
Every page is a normal file you can open in a text editor (Notepad, TextEdit,
VS Code or Cursor), change, save, and look at in your web browser.

---

## What each file is

| File | What it is |
|---|---|
| `index.html` | Home page (steeple photo, Sundays at Zion, "Find your way in" boxes, "Happening at Zion" boxes, Lutheran roots section, pastor search notice) |
| `plan-a-visit.html` | Plan a Visit: Sunday schedule, map, parking, worship style, children, livestream, sermons, Advent & Christmas, Lent & Easter, office contact. Jump list at the top. |
| `ministries.html` | Ministries: youth, adult Sunday School, Ladies' Bible Study, fellowship, Altar Guild, choirs, facilities, baptisms/weddings/funerals, cemetery, library, Alpha, food pantry, Love INC, missions grant. Jump list at the top. |
| `team.html` | About > Team (pastor search, ministry team, office) |
| `faith.html` | About > Faith (mission, statement of faith, LCMC) |
| `history.html` | About > History (stone church, timeline, today, sources) |
| `sermons.html` | About > Sermons (YouTube and Facebook Live links) |
| `calendar.html` | Events > Calendar (Church Center calendar embed) |
| `vbs.html` | Events > Vacation Bible School |
| `ham-dinner.html` | Events > Ham Dinner Sunday |
| `rummage-sale.html` | Events > Rummage Sale |
| `give.html` | Give (Church Center giving link, funds) |
| `call.html` | Call to Pastoral Ministry (temporary, during the pastor search). Not in the menu; the pastor search notices on Home and Team link to it. |
| `404.html` | "Page not found" page the web host shows for a wrong address |
| `css/style.css` | The one stylesheet: all colors, fonts, spacing and layout. Colors are at the very top. |
| `js/main.js` | A few lines of JavaScript: opens the phone menu and the drop-downs, and sets the footer year. |
| `images/` | Every photo and the logo. |
| `docs/` | Files people can download (the missions grant application PDF). |
| `sitemap.xml` | List of pages for Google. Add a line if you add a page. |
| `robots.txt` | Tells search engines they may read the whole site. |
| `_redirects` | Netlify only: sends old-site addresses to the new pages (for now, `/call-page/` to `call.html`). |
| `EDITING-CHEATSHEET.md` | One page of common edits with exact examples. |
| `CLAUDE.md`, `.cursor/rules/zion-site.mdc` | Instructions for AI helpers (Claude, Cursor, VS Code Copilot). Same text in both. |
| `CHANGELOG.md` | A short diary of what changed and when. |
| `.gitignore` | Tells git which junk files to ignore. |

### The menu

Home · Plan a Visit · Ministries · About ▾ (Team, Faith, History, Sermons) ·
Events ▾ (Calendar, VBS, Ham Dinner, Rummage Sale) · Give

The menu is part of the header, so a menu change goes in every page (see below).
A menu item that is one page is a plain link; only About and Events have drop-downs.

### Jump lists on long pages

`plan-a-visit.html` and `ministries.html` start with a row of rounded links (the "jump list").
Each link like `<a href="#parking">Parking</a>` jumps to the section with `id="parking"`.
To add a section: copy a whole `<section ... id="...">` block, give it a new id,
and add a matching link to the jump list. Other pages can link straight to a section too,
for example `ministries.html#cemetery`.

### How a page is laid out

Every page has the same four parts, marked with big comments so you can find them:

```
<head>              title, description, sharing preview, fonts, Google Analytics
HEADER              logo and menu            (identical on every page)
MAIN CONTENT        the part that is different on each page
FOOTER              address, contact, Connect links (identical on every page)
```

**The header and footer are copied into every page.** If you change one
(say, new office hours in the footer), make the same change in all 14 `.html`
files. Find & Replace across files (VS Code / Cursor: Ctrl+Shift+H, Mac Cmd+Shift+H)
makes that quick.

---

## Preview the site on your computer

Double-click `index.html`. It opens in your web browser and every link and photo works.
After you edit and save a file, press Refresh (F5, or Cmd+R on a Mac) in the browser.

(`404.html` looks plain when opened this way. That's expected; it is styled once it is online.)

**YouTube videos and Google maps** (on `call.html`) show "Error 153" or stay blank when the file is
opened by double-clicking. They need a real web address. In VS Code, install the **Live Server**
(or **Live Preview**) extension, right-click `index.html` > **Open with Live Server**, and the site opens at
`http://127.0.0.1:5500/` with everything working. It also refreshes the browser each time you save.

---

## Edit words

1. Open the page in your editor (for example `plan-a-visit.html`).
2. Use Find (Ctrl+F) to locate the words you want to change.
3. Change only the words between the tags. For example, in
   `<p>Come as you are.</p>` change `Come as you are.` and leave `<p>` and `</p>` alone.
4. Save, then refresh the browser.

Special characters: write `&amp;` for **&**, and `&rarr;` makes the **→** arrow.
Apostrophes and quotes can be typed normally.

Each page also has its own **title** and **description** near the top
(`<title>` and `<meta name="description">`). These are what Google shows.
Keep the description around 150 characters.

---

## Swap a photo

**Easiest:** give the new photo exactly the same file name as the old one
(for example `choir.jpg`) and copy it into `images/`, replacing the old file. Done.

**Or** use a new name:

1. Put the new photo in `images/` (lowercase, no spaces: `easter-2027.jpg`).
2. In the page, find the old `<img ...>` line and change:
   - `src="images/old-name.jpg"` to `src="images/easter-2027.jpg"`
   - `alt="..."` to a short description of what's in the new photo (for people using screen readers, and for Google). Every photo needs one.
   - `width="..." height="..."` to the new photo's size in pixels (right-click the file > Properties > Details on Windows, or Get Info on a Mac). This stops the page from jumping while it loads. Close is fine.

Tips: save photos as JPG, about 1200–1600 pixels on the long side, under ~500 KB.
The page crops photos to fit their box, so keep the subject near the middle.

---

## Change colors or fonts

Open `css/style.css`. At the top, under **1. COLORS, FONTS AND SIZES**:

```css
--primary: #1f4e8c;
--accent: #b3202a;
```

Change the code after the colon (keep the `;`). Every button, banner and line using
that color updates across the whole site. Color codes can be picked at
https://htmlcolorcodes.com.

---

## Turn on Google Analytics

1. In Google Analytics, create a GA4 property and a Web data stream for the site.
   Google gives you a **Measurement ID** that looks like `G-AB12CD34EF`.
2. In your editor, use **Find & Replace across all files** (Ctrl+Shift+H):
   find the old ID, replace with the new one, **Replace All**. (Current ID: `G-QFN812B2KW`.)
   Each page has it in 2 places inside the block marked `GOOGLE ANALYTICS`.
3. Publish. Visits show up in Analytics within a day (Realtime shows them right away).

---

## Publish the site

### Option A: Netlify Drop (simplest, free)

1. Go to https://app.netlify.com/drop and sign in (free account).
2. Drag the whole `zion-site` folder onto the page.
3. Netlify gives you a web address like `something.netlify.app`. Check it.
4. To update later: open the site in Netlify > **Deploys** > drag the folder again.
5. To use zion-castroville.org: Netlify > **Domain management** > Add a domain, and follow its
   instructions for where the domain is registered.

### Option B: GitHub → Netlify (updates publish automatically) — the plan for Zion

1. Put the folder on GitHub (see "Git basics" below).
2. In Netlify: **Add new site > Import an existing project > GitHub**, pick the repository.
3. Build command: leave **empty**. Publish directory: `.` (a single dot, the top folder).
4. From then on, every change you push to GitHub goes live within a minute.
   So preview locally (Live Server) **before** you push.

Zion's setup (2026): the Netlify account belongs to the church admin account, not a personal one.
The repository is https://github.com/adrianacalk/zion-website. The domain zion-castroville.org is
registered at Network Solutions (log in from the church office). When switching the domain, change only
the website records (`@` and `www`). **Leave the MX records alone**: they carry the church's Google email.

---

## Git basics (saving versions)

Git keeps a history of every change, so you can always go back. GitHub stores that
history online. You do not need it to run the site, but it's handy with Cursor.

**With GitHub Desktop (no typing commands):**

1. Install GitHub Desktop (https://desktop.github.com) and sign in.
2. **File > Add local repository**, choose the `zion-site` folder. If it says the folder
   isn't a repository yet, click **create a repository**.
3. Type a short summary (like "Initial site v1.0") and click **Commit to main**.
4. Click **Publish repository** (untick "Keep this code private" only if you want it public).
5. After later edits: write a summary, **Commit**, then **Push origin**.

**With the command line:**

```
cd zion-site
git init
git add .
git commit -m "Initial site v1.0"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/zion-site.git
git push -u origin main
```

After that, each round of changes is:

```
git add .
git commit -m "Short note about what changed"
git push
```

---

## Still to do

These are marked in the pages with `<!-- TODO: ... -->` comments. Search for `TODO` to find them.
Last updated 2026-11-28.

**Launch**
- [ ] **Netlify**: create the account under the church admin account, import the GitHub repository
      (Option B above), check the site at its `netlify.app` address.
- [ ] **Domain**: point zion-castroville.org at Netlify from Network Solutions (website records only, not MX).
- [ ] **Google Search Console**: add the site, verify it, submit `https://zion-castroville.org/sitemap.xml`.
- [ ] **Old addresses** (optional): add more lines to `_redirects` for old-site pages people may have
      bookmarked (`/rummage/`, `/ham-dinner/`, `/vbs-page/`, `/history-page/` and so on).

**Content**
- [ ] **Sunday School time**: Plan a Visit now says classes are 8:45 to 9:45 am (Children and youth section),
      but the Sunday list on `plan-a-visit.html` and `index.html`, and `ministries.html`, still say 9 to 9:45 am.
      Pick one and make them match.
- [ ] **VBS registration link** (`vbs.html`): the "Register for VBS" button has `href="#"`.
      Paste the Church Center Registrations signup link. Also confirm the 2027 dates (July 6–8) and 9 am to 1 pm.
- [ ] **Ham Dinner date** (`ham-dinner.html`): check the 2026 date against the 2026 flyer,
      and fill in the October 2027 date when it is set.
- [ ] **Band name** (`ham-dinner.html`): "2026: the Joyful Noise band".
- [ ] **Lent and Easter 2027 dates** (`plan-a-visit.html`).
- [ ] **Ministries details** (`ministries.html`): youth group (if any); Ladies' Bible Study; Altar Guild;
      next Alpha (optional); food pantry needs (optional); how members can volunteer with Love INC (optional).
- [ ] **Team** (`team.html`): who leads worship during the pastor search; other council members and office staff;
      check that every name listed is still current.
- [ ] **Sermons** (`sermons.html`, optional): paste a YouTube embed of the newest sermon.

**Done recently:** Church Center calendar embed, Google Analytics, social links for Google (schema sameAs),
rummage sale location, parking, worship style and Communion note, nursery/quiet room, Call page.

Seasonal reminders (not TODOs): the Advent & Christmas 2026 box appears on `index.html`,
`calendar.html` and `plan-a-visit.html`; update or remove it after Christmas. The 175th anniversary box on
`index.html` can come down after January 2027. When the pastor call is filled, remove the pastor search notices
on `index.html` and `team.html`, delete `call.html`, and take its line out of `sitemap.xml` and `_redirects`.
Update the Lent & Easter dates on `plan-a-visit.html` each year.
