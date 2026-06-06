# AGENTS.md

## Project Overview

This is Chenghui's personal Astro static blog website.

The owner wants to keep clear control over the website's structure, routing, content model, and behavior. Future Codex sessions should work carefully, explain proposed changes before editing, and avoid broad rewrites unless explicitly requested.

The main goal is to maintain a clean personal blog with category pages such as Blog, English, Method, and Literature.

## Tech Stack

- Framework: Astro
- Content: Markdown/MDX content
- Package manager: npm
- Build tool: Astro CLI
- Content system: Astro content collections
- Deployment: GitHub Pages via GitHub Actions
- Key integrations may include:
  - `@astrojs/mdx`
  - `@astrojs/rss`
  - `@astrojs/sitemap`
  - `sharp`

Always verify the actual dependencies from `package.json` before making technical assumptions.

## Important Directories and Files

### `src/pages`

Astro file-based routing lives here. Each `.astro` or route file maps to a website URL.

Important route files:

- `src/pages/index.astro`
  - Home page.
- `src/pages/about.astro`
  - About page.
- `src/pages/blog/index.astro`
  - Main blog listing page.
  - Reads posts from the `blog` content collection.
- `src/pages/blog/[...slug].astro`
  - Dynamic individual blog post route.
  - Generates `/blog/<post-id>/` pages from entries in `src/content/blog`.
- `src/pages/english/index.astro`
  - English category page.
  - Should show only posts whose frontmatter category is `english`.
- `src/pages/method/index.astro`
  - Method category page.
  - Should show only posts whose frontmatter category is `method`.
- `src/pages/literature/index.astro`
  - Literature category page.
  - Should show only posts whose frontmatter category is `literature`.
- `src/pages/rss.xml.js`
  - RSS feed route.

### `src/content`

Markdown and MDX content lives here.

The intended content model is:

- Use one active collection: `src/content/blog`.
- All published posts should live in `src/content/blog`.
- Category pages should filter posts by frontmatter, not by separate content folders.
- File names determine post IDs and blog URL slugs.
- There is currently no separate slug frontmatter field.

Expected frontmatter fields:

```yaml
title:
description:
pubDate:
updatedDate:
heroImage:
category:
tags:
```

The `category` field should be used for category filtering.

Recommended category values:

```yaml
category: english
category: method
category: literature
```

Be careful with capitalization. Prefer lowercase category values in frontmatter and in filtering logic.

### `src/content.config.ts`

This is the active Astro content collection configuration.

If category pages depend on `post.data.category`, then `category` must be defined in the active schema here.

If tags are used in posts or pages, `tags` should also be defined in the active schema.

### `src/consts.ts`

This file should mainly contain site-level constants such as site title and description.

If this file contains a duplicate content collection schema, be careful. Do not assume that schema is active. Astro's real content collection schema should be checked in `src/content.config.ts`.

Avoid keeping duplicate schema definitions in multiple files unless there is a clear reason.

### `src/components`

Reusable Astro components live here.

Important files:

- `src/components/Header.astro`
  - Main navigation links.
- `src/components/HeaderLink.astro`
  - Navigation link active-state behavior.
- `src/components/BaseHead.astro`
  - Shared metadata, global CSS import, favicon, RSS, sitemap, and social preview metadata.
- `src/components/Footer.astro`
  - Site footer.
- `src/components/FormattedDate.astro`
  - Date display helper.

### `src/layouts`

Page and post layouts live here.

Important file:

- `src/layouts/BlogPost.astro`
  - Layout for individual blog posts and some post-like pages.
  - Displays title, description, publication date, updated date, hero image, and content.

## Deployment

- `.github/workflows/deploy.yml`
  - GitHub Pages deployment workflow.

Do not change deployment settings unless explicitly requested.

## Development Commands

Run commands from the project root.

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Build the production site:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

Astro CLI:

```sh
npm run astro
```

There is currently no dedicated lint, test, or type-check script unless confirmed in `package.json`.

If type checking is needed, first inspect the installed Astro version and project setup. Do not add new scripts without approval.

## Coding Rules

- Prefer minimal, focused changes.
- Do not redesign the UI unless explicitly requested.
- Do not rename routes, folders, files, or frontmatter fields without asking first.
- Do not change URL slugs unless explicitly requested.
- Do not move posts between content folders unless explicitly requested.
- Keep the existing visual style and structure unless there is a clear reason to change it.
- Preserve the owner's control over content organization and site behavior.
- Explain every changed file clearly.
- Avoid unrelated refactors.
- Do not remove existing content unless explicitly asked.
- Do not change deployment settings without approval.

Be especially careful with:

- blog route generation
- category filtering
- content collection schemas
- frontmatter fields
- URL slugs
- navigation links
- RSS generation
- GitHub Pages deployment

## Debugging Rules

Before making code changes:

1. Reproduce the bug or reason through it from the code.
2. Identify the likely root cause.
3. List the files that need inspection.
4. List the files that may need modification.
5. Propose a small fix.
6. Wait for approval before implementing.

After approval:

1. Implement only the approved change.
2. Run the relevant check or build.
3. Report what changed.
4. Report whether verification passed.
5. Mention any remaining risks or follow-up tasks.

For category or blog-post bugs, inspect these first:

- `src/content.config.ts`
- `src/content/blog`
- `src/pages/blog/index.astro`
- `src/pages/blog/[...slug].astro`
- `src/pages/english/index.astro`
- `src/pages/method/index.astro`
- `src/pages/literature/index.astro`
- `src/consts.ts`

## Current Known Fragile Areas

The category pages rely on `post.data.category`, but `category` may not be defined in the active content schema.

The `tags` field appears in content or duplicate schema definitions, but it may not be defined in the active schema.

There may be a duplicate content collection schema in `src/consts.ts`, which can confuse future editing.

`src/content/english` exists but may not be part of the active registered collection. Do not use it as a second active content model unless the owner explicitly chooses that structure.

Some starter-template content may still exist in the home page, README, header links, or social links.

Some Chinese text may appear garbled in terminal output. Verify text in the browser before editing content.

## Done Criteria

A task is done only when:

- The requested bug or improvement is handled.
- The relevant build or check passes, unless there is a clear reason it could not be run.
- The changed files are explained clearly.
- No unrelated files are changed.
- The website structure, routes, and content model remain under the owner's control.
