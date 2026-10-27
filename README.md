# AI Ethics Quest — Interactive GitHub Pages Prototype

An interactive **unofficial student concept** designed to demonstrate Duolingo-inspired practice mechanics for ethical AI literacy. Built with plain HTML, CSS, and JavaScript. No installation, login, backend, database, or API key is required.

> **Note:** This is an independent competition prototype, not an official Duolingo application or a UNESCO-accredited assessment. Scores are designed for formative practice only.

## What's included?

- Three playable levels: **Information Integrity**, **Data Privacy**, and **Bias & Fairness**.
- Two decisions in each level. Your first response changes the follow-up story.
- Custom feedback and consequences after each decision.
- XP points: 75 for a strong choice, 40 for a partially responsible choice, and 10 for a risky choice.
- Maximum score: **450 XP** across six decisions.
- Decision streak, personal best, achievements, and competency breakdown.
- Campus and Workplace contexts (switchable before starting a quest).
- Browser-only saved progress using `localStorage`, with a Reset button.
- Responsive design for mobile and desktop, keyboard shortcuts (`1`, `2`, `3`).

## Technologies

| File | Function |
| --- | --- |
| `index.html` | App structure and browser entry point. |
| `styles.css` | All styling, animations, and responsive layout. |
| `app.js` | Scenarios, branching logic, scoring, XP, state persistence, and results. |
| `README.md` | This setup guide. |

**External services:** Google Fonts is used for optional typography. If it cannot load, system fonts are used instead. The app itself requires no external APIs or JavaScript libraries.

## Try it on your computer

1. Extract the downloaded ZIP file.
2. Open the folder created by extracting the ZIP (it contains four files).
3. Double-click `index.html`. It should open in Chrome, Edge, or another browser.
4. Select **Campus** or **Workplace**, then click **Start your quest**.

Do not separate `index.html`, `styles.css`, and `app.js`; they must be in the same folder.

## Publish it using GitHub Pages — beginner instructions

### 1. Create your GitHub account

1. Visit **https://github.com**.
2. Click **Sign up** and create an account (skip this if you already have one).
3. Verify your email address if GitHub requests it.

### 2. Create a repository

1. Sign in to GitHub.
2. Click the **+** icon at the top right, then choose **New repository**.
3. Set **Repository name** to `ai-ethics-quest`.
4. Choose **Public** (necessary for GitHub Pages on GitHub Free).
5. You can leave **Add a README file** unchecked because this project already contains a README.
6. Click **Create repository**.

### 3. Upload all website files

1. On the new repository page, click **uploading an existing file**. If the repository already has content, choose **Add file → Upload files** instead.
2. Open your extracted `ai-ethics-challenge` folder on your laptop.
3. Select these **four files**, not the outer folder:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
4. Drag them into the GitHub upload box, or use **choose your files**.
5. Wait for all files to appear in the upload list.
6. Scroll down, enter a message like `Add interactive AI Ethics Quest prototype`, and click **Commit changes**.

**Check:** The files must be shown directly at the top of your repository. The file `index.html` must not be buried in another folder.

### 4. Turn on GitHub Pages

1. From the repository, select **Settings**.
2. In the left sidebar, choose **Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Under **Branch**, choose `main` and `/ (root)`.
5. Click **Save**.
6. Wait for GitHub's deployment to finish. Check **Settings → Pages** again for the live URL.

Your web link will have this format:

`https://YOUR-GITHUB-USERNAME.github.io/ai-ethics-quest/`

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. The link above is only an example—it is not live until you've published the repository.

### 5. Test before putting the link in PowerPoint

1. Open your GitHub Pages link in a new tab.
2. Refresh once and check that the design loads (green hero, sidebar, three missions).
3. Try one full quest and verify that all three levels work.
4. Test both **Campus** and **Workplace** settings.
5. Refresh during a quest and check that progress is saved.
6. Open the link in an Incognito/Private window or on another device. It should work **without GitHub login**.
7. Test the website on a phone as well.

### 6. Add the link to your PowerPoint

1. Add a screenshot of the simulation interface to your slide.
2. Insert a button-shaped object with the text **TRY THE INTERACTIVE DEMO**.
3. Select it and press `Ctrl + K` (or use **Insert → Link**).
4. Paste the GitHub Pages URL and confirm.
5. Test the button in presentation/slideshow mode.
6. Optional: create a QR code pointing to the same URL, so judges can open the demo on a phone.

**Presentation tip:** Keep a short screen recording of the demo as backup in case venue internet fails. PowerPoint hyperlinks open the website in a browser; the game is not natively embedded inside PowerPoint.

## How to update the published app

1. Edit the relevant file in your project folder.
2. Go to the corresponding file in your GitHub repository.
3. Click its **Edit** (pencil) button; replace the contents if needed and click **Commit changes**.
4. GitHub Pages automatically republishes changes. Give it some time, then refresh the live website.

For larger multi-file changes, you can upload your updated project files again to the repository root and commit them.

## Common problems

| Problem | Likely cause / solution |
| --- | --- |
| `404 Not Found` | Check Settings → Pages is set to `main` + `/ (root)`; ensure `index.html` is in the repository root and deployment finished. |
| Page opens without styling | `styles.css` is missing, renamed, or not in the same directory as `index.html`. |
| Buttons don't work | `app.js` is missing or in the wrong directory. Check the browser's developer console for errors. |
| Website only works when logged in | Make sure you copied the **GitHub Pages** link, not the repository or editing-preview URL. |
| Old changes still visible | Wait for deployment, then hard-refresh (`Ctrl + F5`). |
| Scores disappear on another device | Expected: scores are saved locally in the current browser, not in an online database. |

## Customize the simulation

- Change questions and answers in `app.js`, inside the `scenarios` array.
- Change scoring by editing each option's `xp` value, but note that the current feedback tiers assume 75 / 40 / 10 XP.
- Change colors or spacing in `styles.css`.
- Change app title and labels in `index.html`.

## Design & evaluation considerations

- The game evaluates **formative decisions**, not certified competency. A serious credential must assess new cases using validated scoring and assessment integrity controls.
- Feedback is educational and simplified; expert review would be required before any formal university or corporate use.
- XP is used for engagement, not as a substitute for proven behavior change.
- The current prototype intentionally avoids a live generative AI model. That means it produces controlled, repeatable feedback without API charges or uncertain outputs.

## Official hosting documentation

- [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
