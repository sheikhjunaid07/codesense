# Implementation Plan: Text Logo (CodeSense)

## Overview

Add a "CodeSense" text logo to the top-left of the page by introducing a header bar above the existing two-panel editor layout.

## Tasks

- [x] 1. Update App.jsx to add the header with the text logo
  - Wrap existing JSX in `<div className="app-wrapper">`
  - Add `<header className="navbar"><span className="logo">CodeSense</span></header>` before `<main>`
  - Remove the fragment wrapper `<>...</>`
  - _Requirements: 1.1, 1.3_

- [x] 2. Update App.css to style the header and fix the layout
  - Add `.app-wrapper` styles: `display: flex; flex-direction: column; height: 100%; width: 100%;`
  - Add `.navbar` styles: full width, background color, padding, flex row with left alignment
  - Add `.logo` styles: font size, font weight, color, letter spacing
  - Change `main` height from `height: 100%` to `flex: 1` so it fills remaining space below the header
  - _Requirements: 1.2, 1.4, 1.5_

- [ ] 3. Write example tests for the header
  - [x] 3.1 Write test: header renders with "CodeSense" text
    - **Property 1: Header contains logo text**
    - **Validates: Requirements 1.1**
  - [ ] 3.2 Write test: header appears before main in the DOM
    - **Property 2: Header precedes main in DOM**
    - **Validates: Requirements 1.3, 1.5**

- [ ] 4. Checkpoint — verify the logo appears correctly in the browser
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- No backend changes required
- No new dependencies needed
