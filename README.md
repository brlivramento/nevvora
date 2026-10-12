
# Nevvora

An experimental CSS framework developed as a personal learning project to explore component-based styling, design tokens, and lightweight user interfaces.

Focused on clean surfaces, subtle borders, soft shadows, rounded corners, and minimal visual design.

Built with **HTML, CSS, and vanilla JavaScript**, without external dependencies.

![Status](https://img.shields.io/badge/status-experimental-orange)
![Version](https://img.shields.io/badge/version-0.1.0-blue)

## Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## Overview

Nevvora was created as a study project to experiment with CSS architecture and reusable UI components without relying on existing frameworks.

The project explores:

- Component-based CSS organization
- Customizable design tokens
- Consistent visual patterns
- Responsive layouts
- Lightweight JavaScript interactions
- Dependency-free distribution

## Features

- Reusable components with the `nv-` prefix
- CSS variables for colors, typography, spacing, borders, and shadows
- Responsive layout utilities
- Optional JavaScript interactions
- Modular CSS and JavaScript structure
- Local examples without installation
- Dependency-free build process

## Components

| Category | Components |
| --- | --- |
| Actions | Buttons, dropdowns, pagination |
| Forms | Inputs, textarea, select, checkbox, radio, switch, upload |
| Organization | Cards, tabs, accordion, tables |
| Feedback | Alerts, badges, tooltip, modal, toast |
| Content | Avatars, lists, timeline, empty states |
| Indicators | Progress bars, skeleton loading |
| Layout | Container, grid, rows, stacks |

## Prerequisites

Node.js is required to build the project.

No external dependencies or package installation are required.

## Run Locally

1. Clone the repository:

```bash
git clone git@github.com:brlivramento/nevvora.git
cd nevvora
```

2. Build the project:

```bash
npm run build
```

3. Start the development server:

```bash
npm run dev
```

- Application: `http://localhost:8080/examples/`

Alternatively, open `examples/index.html` directly in your browser.

## Usage

Include the compiled CSS and optional JavaScript files in your HTML:

```html
<link rel="stylesheet" href="dist/nevvora.css">

<script src="dist/nevvora.js" defer></script>
```

### Example Component

```html
<article class="nv-card nv-stack">
  <h2>New Project</h2>

  <label class="nv-field">
    Project Name
    <input
      class="nv-input"
      placeholder="My project"
    >
  </label>

  <button
    class="nv-btn nv-btn--primary"
    type="button"
  >
    Create Project
  </button>
</article>
```

The component provides visual styling. Application-specific behavior must be implemented separately.

## Customization

Nevvora uses CSS custom properties to define its visual identity.

Override the default tokens after loading the framework:

```css
:root {
  --nv-font: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --nv-accent: #718578;
  --nv-bg: #fafbfc;
  --nv-surface: #ffffff;
  --nv-text: #292e39;
  --nv-muted: #6d7482;
  --nv-border: #e9ecf1;
  --nv-radius: 14px;
  --nv-shadow:
    0 3px 7px #28324803,
    0 12px 32px #28324809;
}
```

## JavaScript Interactions

Optional JavaScript provides basic interactions for supported components.

```javascript
// Display a toast notification
Nevvora.toast('Changes saved!', 3000);

// Open and close a modal
Nevvora.openModal('#my-modal');
Nevvora.closeModal('#my-modal');

// Initialize dynamically inserted components
Nevvora.init(document.querySelector('#new-content'));
```

## Project Structure

```text
nevvora/
├── src/
│   ├── css/
│   │   ├── components/
│   │   ├── tokens.css
│   │   ├── reset.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── utilities.css
│   │   └── nevvora.css
│   └── js/
│       ├── components/
│       └── nevvora.js
├── dist/
│   ├── nevvora.css
│   └── nevvora.js
├── examples/
├── docs/
├── scripts/
│   └── build.mjs
├── package.json
└── README.md
```

## Development

Edit the source files in `src/` and rebuild the distribution:

```bash
npm run build
```

To start the local server on a custom port, configure the `dev` script in `package.json`:

```json
{
  "scripts": {
    "dev": "python3 -m http.server"
  }
}
```

Then run:

```bash
npm run dev -- 3000
```

- Application: `http://localhost:3000/examples/`

This server requires Python. On Windows, use `python` instead of `python3` if applicable.

## Documentation

- [Getting Started](docs/getting-started.md)
- [Customization](docs/customization.md)
- [Components & Interactions](docs/components.md)

## Demo

<img width="1185" height="983" alt="Nevvora component gallery" src="https://github.com/user-attachments/assets/6f8d42f8-07ed-4c19-be3e-243cae02b931" />

<img width="1194" height="933" alt="Nevvora interface examples" src="https://github.com/user-attachments/assets/84d87e09-e1c2-40c1-b448-1866a7213450" />

<img width="1186" height="973" alt="Nevvora UI components" src="https://github.com/user-attachments/assets/9e1cb19e-db03-4204-900b-f9ed4732e27f" />

<img width="1253" height="896" alt="Nevvora layout examples" src="https://github.com/user-attachments/assets/cdfd9941-890c-4d15-94ad-2bf9977ebd7c" />
