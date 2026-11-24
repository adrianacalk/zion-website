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
| `index.html` | Home page (steeple photo, Sunday times, three highlight boxes, pastor search notice) |
| `worship.html` | Worship / Plan a Visit (Sunday times, directions, Facebook Live) |
| `history.html` | Our History (stone church, timeline, today, sources) |
| `cemetery.html` | Zion Lutheran Cemetery |
| `get-involved.html` | Get Involved (choirs, bell choir, food pantry, fellowship) |
| `kids.html` | Kids & Families (Sunday School, VBS) |
| `calendar.html` | Calendar (placeholder for the Church Center calendar) |
| `ham-dinner.html` | Ham Dinner Sunday |
| `rummage-sale.html` | Rummage Sale |
| `give.html` | Give (Church Center giving link, funds) |
| `contact.html` | Contact Us |
| `404.html` | "Page not found" page the web host shows for a wrong address |
| `css/style.css` | The one stylesheet: all colors, fonts, spacing and layout. Colors are at the very top. |
| `js/main.js` | A few lines of JavaScript: opens the phone menu and the drop-downs, and sets the footer year. |
| `images/` | Every photo and the logo. |
| `sitemap.xml` | List of pages for Google. Add a line if you add a page. |
| `robots.txt` | Tells search engines they may read the whole site. |
| `EDITING-CHEATSHEET.md` | One page of common edits with exact examples. |
| `CLAUDE.md`, `.cursor/rules/zion-site.mdc` | Instructions for AI helpers (Claude, Cursor). Same text in both. |
| `CHANGELOG.md` | A short diary of what changed and when. |
| `.gitignore` | Tells git which junk files to ignore. |

### How a page is laid out

Every page has the same four parts, marked with big comments so you can find them:

```
<head>              title, description, sharing preview, fonts, Google Analytics
HEADER              logo and menu            (identical on every page)
MAIN CONTENT        the part that is different on each page
FOOTER              address, contact, Sunday times (identical on every page)
```

**The header and footer are copied into every page.** If you change one
(say, new office hours in the footer), make the same change in all 12 `.html`
files. Find & Replace across files (VS Code / Cursor: Ctrl+Shift+H, Mac Cmd+Shift+H)
makes that quick.

---

## Preview the site on your computer

Double-click `index.html`. It opens in your web browser and every link and photo works.
After you edit and save a file, press Refresh (F5, or Cmd+R on a Mac) in the browser.

(`404.html` looks plain when opened this way. That's expected; it is styled once it is online.)

---

## Edit words

1. Open the page in your editor (for example `worship.html`).
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
   find `G-XXXXXXXXXX`, replace with your ID, **Replace All**.
   Each page has it in 2 places inside the block marked `GOOGLE ANALYTICS`.
3. Publish. Visits show up in Analytics within a day (Realtime shows them right away).

Until you do this, the placeholder does nothing harmful.

---

## Publish the site

### Option A: Netlify Drop (simplest, free)

1. Go to https://app.netlify.com/drop and sign in (free account).
2. Drag the whole `zion-site` folder onto the page.
3. Netlify gives you a web address like `something.netlify.app`. Check it.
4. To update later: open the site in Netlify > **Deploys** > drag the folder again.
5. To use zion-castroville.org: Netlify > **Domain management** > Add a domain, and follow its
   instructions for where the domain is registered.

### Option B: GitHub → Netlify (updates publish automatically)

1. Put the folder on GitHub (see "Git basics" below).
2. In Netlify: **Add new site > Import an existing project > GitHub**, pick the repository.
3. Build command: leave **empty**. Publish directory: `.` (a single dot, the top folder).
4. From then on, every change you push to GitHub goes live within a minute.

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

- [ ] **VBS registration link** (`kids.html`): the "Register for VBS" button has `href="#"`.
      Paste the Planning Center (Church Center) Registrations signup link in its place.
- [ ] **Church Center calendar** (`calendar.html`): replace the dashed placeholder box with the
      Planning Center embed code (instructions are in the comment right above the box).
- [ ] **Verify the Ham Dinner date** (`ham-dinner.html`): check the 2026 date against the 2026 flyer,
      and fill in the October 2027 date when it is set.
- [ ] **Verify the rummage sale location** (`rummage-sale.html`): the text says the building is
      "across London Street from the church"; the storefront photo's description says
      "on Fiorella Street". Confirm, and check the arrow on `images/rummage-map.jpg`.
- [ ] **Verify the band name** (`ham-dinner.html`): "2026: the Joyful Noise band".
- [ ] **Social links for Google** (`index.html`): optional "sameAs" line in the schema.org block (see its comment).
- [ ] **Google Analytics ID**: replace `G-XXXXXXXXXX` (see above).
- [ ] **Domain**: confirm the site will live at https://zion-castroville.org (see the note at the top of this file).

Seasonal reminders (not TODOs): the Advent & Christmas 2026 box appears on `index.html`
and `calendar.html`; update or remove it after Christmas. The pastor search notice is on `index.html`.
