A responsive, production-oriented frontend website developed using React.js, Vite, JavaScript, and CSS3.

This project demonstrates practical frontend development skills through component-based architecture, reusable UI, data-driven rendering, responsive design, interactive state management, external integrations, and production deployment.

Overview

The Nail Republic is a custom frontend implementation for a premium salon business.

The project focuses on building a polished and responsive business website while maintaining a structured and maintainable React codebase.

Rather than relying on a pre-built website template, the interface was implemented using reusable React components, JavaScript data structures, CSS variables, responsive layouts, and interactive UI states.

Development Goals

Build a complete responsive business website

Translate a visual design into a functional frontend

Create reusable React components

Render repeated content dynamically from data

Implement interactive UI using React state

Build responsive layouts using CSS Grid and Flexbox

Integrate external services

Maintain a scalable project structure

Deploy the application as a production build

Features

Responsive Navigation

The website includes a responsive navigation system that adapts between desktop and mobile layouts.

The mobile navigation uses React state to control its open/close behavior.

Dynamic Service Catalogue

Services are represented using JavaScript objects and arrays instead of repeating static JSX markup.

Example:

const SERVICES = [
  {
    title: "Nails",
    items: [
      "Gel X Extensions",
      "Acrylic Extensions",
      "Nail Art",
      "Manicure",
      "Pedicure"
    ]
  }
];

The interface dynamically renders these objects using .map().

This improves:

Maintainability

Reusability

Scalability

Code organization

Dynamic Pricing

Pricing information follows the same data-driven approach.

Services and prices are stored as JavaScript objects and rendered dynamically.

Data
  ↓
React Rendering
  ↓
UI

This separates application data from repeated presentation markup.

Interactive FAQ Accordion

The FAQ section uses React state to control which question is expanded.

const [openFaq, setOpenFaq] = useState(null);

Users can expand, collapse, and switch between questions without reloading the page.

Accessibility attributes such as aria-expanded are also used for interactive FAQ controls.

Reusable Components

Common functionality is separated into reusable React components.

components/
├── Call.jsx
├── Insta.jsx
├── Map.jsx
└── Whatsapp.jsx

These components handle:

Telephone actions

Instagram navigation

Google Maps interaction

WhatsApp communication

This reduces duplication and keeps individual functionality isolated.

Frontend Architecture

The application follows a component-based React architecture.

Application
│
├── Navigation
├── Hero
├── Services
├── Pricing
├── Instagram
├── Reviews
├── FAQ
├── Locations
└── Footer

The main page composes the major website sections while reusable functionality is extracted into separate components.

React Concepts Demonstrated

This project demonstrates practical use of:

Functional components

JSX

useState

Props

Component composition

Conditional rendering

Array .map()

Dynamic rendering

Event handling

State-driven UI

Reusable components

Responsive Design

The website is designed to work across desktop, tablet, and mobile viewport sizes.

Responsive behavior is implemented using:

CSS Grid

Flexbox

Media queries

Flexible typography

Responsive spacing

Responsive image containers

The navigation, service cards, pricing layouts, location sections, and other UI elements adapt to smaller screens.

CSS Architecture

The project uses CSS custom properties to maintain a consistent design system.

Example:

:root {
  --bg: #0b0b0a;
  --gold: #c7a86a;
  --text: #f3eee5;
  --muted: #a8a39a;
}

This allows shared design values to be updated globally.

Layout Technologies

CSS Grid

Flexbox

Media Queries

CSS Variables

Relative/absolute positioning

Background overlays

Responsive typography

UI / UX Implementation

The interface focuses on:

Visual hierarchy

Consistent spacing

Clear navigation

Responsive interaction

Readable typography

Strong CTA placement

Consistent card layouts

Mobile usability

The project demonstrates the ability to translate a visual design concept into a functional responsive frontend.

Image & Asset Management

Images are maintained as local project assets and imported into React.

Example:

import nailImage from "../assets/nail1.jpeg";

Images are displayed through responsive containers using properties such as:

object-fit: cover;

The hero section uses a full-width background image with a gradient overlay to maintain text readability.

External Integrations

The project integrates several external services.

Google Maps

Branch locations include embedded Google Maps and direction links.

Instagram

The website includes an Instagram showcase and external profile navigation.

WhatsApp

Dedicated WhatsApp actions allow visitors to initiate communication directly.

Telephone

Phone actions use telephone links for direct calling from supported devices.

Google Fonts

The project uses externally hosted typography for the visual design system.

Accessibility Considerations

The interface includes basic accessibility practices such as:

Semantic HTML structure

Descriptive image alt attributes

aria-label attributes

aria-expanded for accordion controls

Keyboard-accessible interactive elements

Clear button/link semantics

Responsive layouts

Performance Considerations

The application is built with Vite and uses a lightweight frontend architecture.

Performance considerations include:

Vite production builds

Local asset imports

Minimal React state

Reusable components

CSS-based layouts

Lazy-loaded map embeds

Responsive image containers

No unnecessary frontend frameworks

Project Structure

The-Nail-Republic/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Call.jsx
│   │   │   ├── Insta.jsx
│   │   │   ├── Map.jsx
│   │   │   └── Whatsapp.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── TheNailRepublic.jsx
│   │   │   └── ex.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── .gitignore
│
└── README.md

Technology Stack

Category

Technology

Framework

React.js

Build Tool

Vite

Language

JavaScript (ES6+)

UI

JSX

Styling

CSS3

Layout

CSS Grid / Flexbox

State Management

React useState

Icons

React Icons

Maps

Google Maps

Fonts

Google Fonts

Package Manager

npm

Version Control

Git / GitHub

Deployment

Vercel

Installation

Prerequisites

Node.js

npm

Git

Clone the Repository

git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

cd The-Nail-Republic/frontend

Install Dependencies

npm install

Run Development Server

npm run dev

Production Build

npm run build

Preview the production build:

npm run preview

The production output is generated inside:

dist/

Deployment

The application is suitable for deployment using Vercel.

Recommended Configuration

Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Install Command: npm install

Dependencies are installed automatically by Vercel using package.json and package-lock.json.

node_modules should not be committed to the repository.

Development Practices Demonstrated

Componentization

Breaking functionality into smaller reusable components.

Separation of Data and UI

Keeping repeated content in JavaScript data structures instead of duplicating JSX.

State Management

Using React state where interaction requires it.

Responsive Development

Designing layouts for multiple screen sizes instead of targeting a single viewport.

Reusable Styling

Using CSS variables and shared styles to maintain consistency.

Maintainability

Organizing assets, components, pages, and configuration files into separate directories.

Production Deployment

Building and deploying the project through a modern frontend deployment workflow.

Skills Demonstrated

Frontend Development

React.js

JavaScript

JSX

HTML5

CSS3

Responsive Web Design

React

Functional Components

Hooks

useState

Props

Component Composition

Conditional Rendering

Dynamic Rendering

UI Development

CSS Grid

Flexbox

Responsive Breakpoints

Design Systems

Typography

Image Handling

Interactive Components

Integrations

Google Maps

Instagram

WhatsApp

Telephone Links

Tools

Vite

npm

Git

GitHub

Vercel

VS Code

Challenges & Implementation Decisions

Maintaining Consistent Layouts

Different service categories contain different amounts of content.

Approach: A reusable card structure was populated using dynamic service data, allowing the layout to remain consistent while accommodating different content lengths.

Responsive Navigation

Desktop and mobile navigation require different interaction patterns.

Approach: React state controls the mobile navigation while CSS media queries control the layout transition.

Repeated Content

Manually writing every service, price, FAQ, and review would increase code duplication.

Approach: Content was moved into JavaScript arrays and objects and rendered dynamically using .map().

Visual Consistency

The interface contains multiple sections with different layouts.

Approach: CSS variables, shared spacing, typography rules, reusable cards, and common button styles were used to create a consistent visual system.

Future Improvements

Online appointment booking

Backend/API integration

Dynamic service management

Database-backed content

CMS integration

Form validation

Automated WhatsApp enquiries

SEO optimization

Schema.org structured data

Analytics integration

Automated testing

Image optimization

WebP/AVIF asset conversion

CI/CD pipeline

Project Status

Status: Completed Frontend / Production Deployment Ready

The core frontend implementation is complete. Future development can extend the project with backend functionality, booking workflows, dynamic content management, and analytics.

Author

Vishruth Arulselvam | Veena G

MSc Data Science | Frontend Developer

