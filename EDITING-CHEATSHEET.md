# Editing cheat sheet

Open the file, Find (Ctrl+F / Cmd+F) the **Find this** text, change it to the **Change to** text, save, refresh the browser.
Change the words; leave the `<tags>` alone. "All pages" means do it in every `.html` file (Find & Replace across files: Ctrl+Shift+H / Cmd+Shift+H).

| I want to... | File | Find this | Change to |
|---|---|---|---|
| Change a sentence | that page | `<p>Come as you are. Someone will be glad to show you around.</p>` | `<p>Come as you are. We'd love to meet you.</p>` |
| Change office hours | **all pages** (footer) + `plan-a-visit.html` + `team.html` | `Tuesday to Friday, 9 am to 2 pm` | `Tuesday to Thursday, 9 am to noon` |
| Change a Sunday time | `index.html`, `plan-a-visit.html`, **all pages** (footer) | `<b>8:45 am</b>Adult Bible Study` and `8:45 am Adult Bible Study` | `<b>8:30 am</b>Adult Bible Study` / `8:30 am Adult Bible Study` |
| Swap a photo, same name | `images/` folder | old `choir.jpg` | copy the new photo in, named `choir.jpg` |
| Swap a photo, new name | that page | `<img src="images/choir.jpg" alt="The adult choir singing" width="1600" height="1025"` | `<img src="images/choir-2027.jpg" alt="The choir at Easter 2027" width="1600" height="1200"` |
| Fix the VBS button | `vbs.html` | `<a class="btn" href="#">Register for VBS</a>` | `<a class="btn" href="https://zion-castroville.churchcenter.com/registrations/...">Register for VBS</a>` (paste the real link) |
| Set next Ham Dinner date | `ham-dinner.html` | `<b>Next Ham Dinner: October 2027</b> (date coming soon)` | `<b>Next Ham Dinner: Sunday, October 3, 2027</b>` (use the real date) |
| Add a timeline year | `history.html` | `<li><b>2000</b>The Texas Historical Commission places a historical marker at the church.</li>` | add a new line under it: `<li><b>2027</b>Zion celebrates 175 years.</li>` |
| Add a bullet to a list | `rummage-sale.html` | `<li>Clean home decor</li>` | add a new line under it: `<li>Books in good shape</li>` |
| Remove the pastor notice | `index.html` | the block from `<!-- ===== NOTICE: pastor search` down to its `</section>` | delete that whole block |
| Change a button's words | that page | `>Get Directions</a>` | `>Directions</a>` |
| Rename a menu item | **all pages** (header) | `>Plan a Visit</a></li>` | `>Visit Us</a></li>` |
| Change a link | that page | `href="https://www.facebook.com/ZionCastrovilleLCMC/"` | `href="https://the-new-address"` |
| Change the page title Google shows | that page | `<title>Sermons \| Zion Lutheran Church, Castroville TX</title>` | `<title>Watch Sermons \| Zion Lutheran Church, Castroville TX</title>` (also the `og:title` and `twitter:title` lines) |
| Change the main blue | `css/style.css` | `--primary: #1f4e8c;` | `--primary: #1a4479;` |
| Turn on Google Analytics | **all pages** | `G-XXXXXXXXXX` | your ID, e.g. `G-AB12CD34EF` (Replace All) |
| Add a team member | `team.html` | `<li><b>Music Director</b>Pete Martinez</li>` | add a new line under it: `<li><b>Treasurer</b>Jane Doe</li>` (real name) |
| Fill in parking | `plan-a-visit.html` | `<p>Parking details are coming soon. Call the office if you need help getting in.</p>` | `<p>(where to park, in one or two short sentences)</p>` and delete the TODO comment above it |
| Add a ministry section | `ministries.html` | copy a whole `<section class="section" id="alpha">` ... `</section>` block | paste it, change the `id`, heading and words; add `<a href="#new-id">Name</a>` to the jump list at the top |
| Put in the calendar | `calendar.html` | the `<div class="calendar-placeholder" ...> ... </div>` block | delete it; paste Planning Center's embed code inside `<div class="calendar-embed"></div>` |

**Handy codes:** `&amp;` = &nbsp;&amp;  ·  `&rarr;` = →  ·  `&middot;` = ·  ·  `&ndash;` = –  ·  `<br>` = line break  ·  `<strong>bold</strong>`

**If something looks broken:** you probably deleted a `<` `>` or a closing tag like `</p>`. Press Ctrl+Z (undo) until it looks right, then try again. Or open the same file from your last GitHub version and compare.
