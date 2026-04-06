# Design Document: Text Logo (CodeSense)

## Overview

Add a persistent header bar to the CodeSense web application that displays the brand name "CodeSense" as a text logo in the top-left corner. The header sits above the existing two-panel editor layout and spans the full width of the viewport.

## Architecture

The change is purely frontend — no backend modifications required. The existing `App.jsx` and `App.css` files are modified to introduce a `<header>` element and adjust the root layout from a single `<main>` to a column-flex wrapper containing both the header and the main panel.

```
#root
└── <div class="app-wrapper">   ← new column-flex container
    ├── <header class="navbar"> ← new header with logo
    │   └── <span class="logo">CodeSense</span>
    └── <main>                  ← existing two-panel layout (unchanged internally)
        ├── .left
        └── .right
```

## Components and Interfaces

### `<header class="navbar">`

- Full-width bar rendered at the top of the page
- Contains a single child: the logo `<span>`
- Does not scroll with content (fixed height, sits in flow)

### `<span class="logo">`

- Renders the text "CodeSense"
- Positioned at the left side of the header via flexbox alignment
- Styled with a distinct font weight, size, and color to serve as a brand mark

### `App.jsx` changes

- Wrap the existing JSX in a `<div className="app-wrapper">`
- Add `<header className="navbar">` with `<span className="logo">CodeSense</span>` before `<main>`
- Remove the fragment wrapper `<>...</>` in favour of the new wrapper div

### `App.css` changes

- Add `.app-wrapper` styles: `display: flex; flex-direction: column; height: 100%; width: 100%;`
- Add `.navbar` styles: full-width, fixed height, background color, padding, flex alignment
- Add `.logo` styles: font size, weight, color, letter spacing
- Adjust `main` height from `height: 100%` to `flex: 1` so it fills remaining space below the header

## Data Models

No data models are involved — this is a purely presentational change with no state.

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

Based on the prework analysis, all testable acceptance criteria are specific examples (not universal properties over a range of inputs), so they are best validated as unit/example tests rather than property-based tests.

Property 1: Header contains logo text
_For any_ render of the App component, the DOM should contain an element with the text "CodeSense" inside the header.
**Validates: Requirements 1.1**

Property 2: Header precedes main in DOM
_For any_ render of the App component, the header element should appear before the main element in the document order, ensuring the logo is always above the editor panels.
**Validates: Requirements 1.3, 1.5**

## Error Handling

No error conditions apply — this is a static presentational component with no async operations or user input.

## Testing Strategy

### Dual Testing Approach

**Unit / Example Tests** (using Vitest + React Testing Library):

- Verify the header renders with the text "CodeSense"
- Verify the header element appears before the main element in the DOM
- Verify the `.app-wrapper` uses column flex layout so header and main don't overlap

**Property-Based Tests**:

- The properties above (header contains logo, header precedes main) are structural invariants. Since they hold for a single deterministic render with no variable inputs, they are best expressed as example tests rather than randomised property tests. No PBT library is required for this feature.

### Test Configuration

- Framework: Vitest with `@testing-library/react`
- Each test references the design property it validates via a comment: `// Feature: text-logo, Property N: <property_text>`
