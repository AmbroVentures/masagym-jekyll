# Copilot Instructions for MasaGym Jekyll Dev

## Project Overview
This is a Jekyll-based MVP website for MasaGym.ch, focused on providing a simple, maintainable web presence. The codebase is a fork of [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) with customizations for the gym's branding and content. Contributions are managed via GitHub and Jira.

## Architecture & Key Components
- **Jekyll Structure:**
  - `_posts/`: Blog/news posts in markdown, named by date.
  - `_layouts/`: HTML templates for different page types (home, post, minimal, etc.).
  - `_includes/`: Reusable HTML snippets (analytics, comments, nav, social, etc.).
  - `assets/`: Static files (CSS, JS, images).
  - `pages/`: Markdown content pages, organized by topic.
  - `_config.yml`: Main site configuration (title, theme, plugins, etc.).
- **Theme:**
  - Inherits from Beautiful Jekyll, with custom CSS and layout tweaks.
- **External Integrations:**
  - Analytics (Google, Matomo, Cloudflare, etc.) via `_includes/`.
  - Comments (Disqus, Giscus, Staticman, etc.) via `_includes/`.
  - Jira for feature tracking; GitHub Issues for bug reports.

## Developer Workflow
- **Local Development:**
  - Install Ruby, Bundler, and Jekyll.
  - Run `bundle install` to install dependencies.
  - Start local server: `bundle exec jekyll serve` (serves at `http://localhost:4000`).
- **Testing Changes:**
  - Push changes to your fork and verify on your GitHub Pages test site (see README for URLs).
- **Contribution:**
  - Reference Jira Story or GitHub Issue in commit messages and PR titles (e.g., `MAS-17: update footer`).
  - Link your test site in PR descriptions.

## Crucial Limitations
This site is deployed via **GitHub Pages** and uses the **Beautiful Jekyll** theme as its base. All customizations must be compatible with GitHub Pages' supported plugins and the theme's structure.
- **No server-side code:** Only static content is supported; backend features (databases, authentication, etc.) are not possible.
- **Plugin restrictions:** Only whitelisted Jekyll plugins work on GitHub Pages. Avoid custom Ruby plugins unless you know they are supported.
- **Theme boundaries:** Major layout changes should respect Beautiful Jekyll's structure to avoid breaking updates or compatibility.
- **Asset handling:** All assets (images, CSS, JS) must be stored in the repository and referenced with relative URLs.
- **Build environment:** The build runs in GitHub's environment, not locally—test changes on your personal GitHub Pages site before merging.

## Project-Specific Patterns
- **Content Organization:**
  - Use `_posts/` for dated news/events; use `pages/` for static info.
  - Navigation and social links managed via `_includes/nav.html` and `_includes/social-networks-links.html`.
- **Customization:**
  - Add analytics or comment systems by editing/including the relevant HTML in `_includes/` and referencing in layouts.
  - Custom CSS should go in `assets/css/`.
- **Conventions:**
  - All new posts use the `YYYY-MM-DD-title.md` format.
  - Layouts reference includes for modularity (e.g., `{% include footer.html %}`).
  - Site config is centralized in `_config.yml`.

## Content Style & Tone
- Use a friendly, welcoming, and community-focused tone. Address readers directly and encourage participation (e.g., "Jeder ist herzlich eingeladen", "Komm vorbei und trainiere mit uns").
- Highlight inclusivity, respect, and values—emphasize that all are welcome regardless of experience or background.
- Blend modern and vintage aesthetics in visual and written content, referencing local culture and boxing heritage.
- Use clear, concise German (CH) with occasional English terms for branding or emphasis.
- Structure posts and pages with short sections, bolded key points, and call-to-action links (e.g., "Jetzt ist der perfekte Zeitpunkt für ein kostenloses Probetraining!").
- Use front matter for metadata (title, subtitle, tags, images) and markdown for formatting (headings, lists, links, images).

## Examples
- To add a new event, create a markdown file in `_posts/` with:
  - Front matter: `layout: post`, `title`, `subtitle`, `thumbnail-img`, `tags`.
  - Content: Friendly intro, event details, bolded info, call-to-action links.
- To update navigation, edit `_includes/nav.html`.
- To add a new static page, create a markdown file in `pages/` with:
  - Front matter: `layout: page`, `title`, `subtitle`.
  - Content: Short sections, values, links to other pages.

## References
- See `README.md` for contribution workflow and test site setup.
- Key files: `_config.yml`, `_layouts/`, `_includes/`, `assets/`, `pages/`, `_posts/`.

---
For questions about conventions or unclear patterns, review the README or ask for clarification in your PR.
