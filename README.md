<!-- PROJECT LOGO -->
<div align="right">
  <a href="https://github.com/calendso/calendso">
    <img src="https://calendso.com/calendso-logo.svg" alt="Logo" width="160" height="65">
  </a><br/>
  <a href="https://cal.com">Website</a>
  ·
  <a href="https://github.com/calendso/docs/issues">Community Support</a>
</div>

# Design Documentation

The official design documentation, containing our custom design system that we use for all products and services. This documentation site runs on [Docusaurus](https://docusaurus.io), so you may refer to their documentation should you need information on anything that isn't covered here.

## Prerequisites
- Git
- Node.js & npm
- Yarn

## Installation
Firstly, clone the repository using Git:
```console
git clone https://github.com/calendso/design.git
```

Now, you can install the dependencies with yarn:
```console
yarn install
```

## Editing
To create, edit and delete documentation pages, you can simply create markdown (.md) files in the `docs/` folder. You can edit Markdown with any text editor, but VS Code and WebStorm have side-by-side previews so you can see your formatted content whilst writing markdown.

## Local Development

```console
docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
