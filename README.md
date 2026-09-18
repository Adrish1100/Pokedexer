# 📖 Poke-Watch — Project Documentation

> A modern, responsive Pokédex web application for exploring, searching, and filtering Pokémon using data from the PokéAPI.

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [What We Built](#-what-we-built)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [How to Navigate](#-how-to-navigate)
- [How to Search Pokémon](#-how-to-search-pokémon)
- [How to Find Specific Pokémon](#-how-to-find-specific-pokémon)
- [Filtering Pokémon](#-filtering-pokémon)
- [Pagination](#-pagination)
- [Responsive Design](#-responsive-design)
- [Data Source](#-data-source)
- [Project Structure](#-project-structure)
- [Who Built It](#-who-built-it)
- [Development Approach](#-development-approach)
- [Future Improvements](#-future-improvements)
- [Credits](#-credits)
- [Disclaimer](#-disclaimer)

---

# 🧭 About the Project

**Poke-Watch** is a web-based Pokédex built to make exploring Pokémon data simple and interactive.

The project provides a dark, modern interface where users can:

- Search for Pokémon by **name or Pokédex ID**
- Browse Pokémon cards
- Filter Pokémon by **type**
- Filter Pokémon by **generation**
- Use multiple filters together
- Navigate through Pokémon using pagination
- Use the interface comfortably on both desktop and mobile devices

The application retrieves Pokémon information from the **PokéAPI** rather than storing the Pokémon database directly inside the project.

---

# 🛠️ What We Built

The project was built from the ground up as a modern Pokédex interface.

### Main parts of the application

### 1. Header

The header contains:

- Poke-Watch branding
- Pokéball-style logo
- Pokémon search field
- Search functionality
- Mobile navigation controls

The header remains visually consistent across different screen sizes.

---

### 2. Filter Sidebar

The application includes a dedicated filtering area where users can narrow down the Pokémon displayed.

Available filters include:

- Primary type
- Secondary type
- Generation

The sidebar is designed to work differently depending on screen size while keeping the same underlying controls.

---

### 3. Pokémon Display

Pokémon are displayed in a card-based grid.

Each Pokémon can display information such as:

- Pokédex number
- Pokémon name
- Pokémon image
- Height
- Weight
- Attack
- Defense
- Speed

This allows users to quickly compare basic information without opening a separate page.

---

### 4. Pagination

Instead of loading every Pokémon card onto the screen at once, the application divides the results into pages.

Users can navigate using:

**Previous ← → Next**

This keeps the interface manageable when working with a large Pokémon dataset.

---

# ✨ Features

| Feature | Description |
|---|---|
| 🔎 Pokémon Search | Search Pokémon by name or ID |
| 🏷️ Type Filtering | Filter Pokémon by their types |
| 🧬 Generation Filtering | Filter Pokémon by generation |
| 🔀 Multiple Filters | Combine available filters |
| 📋 Pokémon Cards | Display Pokémon information in cards |
| 📄 Pagination | Move through results page by page |
| 📱 Responsive UI | Designed for desktop and mobile |
| 🎨 Modern Interface | Dark Pokédex-inspired design |
| ⚡ API Powered | Pokémon data comes from PokéAPI |
| 🎞️ Animations | Smooth transitions for responsive/mobile controls |

---

# 🧭 How to Navigate

## 💻 Desktop

On desktop, the application uses a sidebar-based layout.

The general navigation is:

```text
┌─────────────────────────────────────────┐
│              POKE-WATCH                 │
│          🔎 Search Pokémon              │
├──────────────┬──────────────────────────┤
│              │                          │
│   FILTERS    │      POKÉMON CARDS      │
│              │                          │
│   Type       │   ┌────┐ ┌────┐ ┌────┐ │
│   Type       │   │    │ │    │ │    │ │
│   Generation │   └────┘ └────┘ └────┘ │
│              │                          │
│   Apply      │                          │
│   Reset      │                          │
│              │                          │
└──────────────┴──────────────────────────┘
```
The sidebar contains the filtering controls, while the main area displays the Pokémon results.


---

##📱 Mobile

On smaller screens, the filter sidebar transforms into a mobile-friendly sliding panel.

Instead of maintaining separate desktop and mobile filter systems, the project uses the same filter sidebar and moves it using CSS transitions.

This keeps the interface cleaner and avoids maintaining duplicate controls.


---

# 🔎 How to Search Pokémon

The search field allows you to directly look up a Pokémon.

You can search using either:

Pokémon Name

For example:

pikachu

or:

charizard

Pokédex ID

You can also search using a Pokémon's numerical ID:

25

which corresponds to Pikachu.


---
```
🔤 Search is not case-sensitive
```
You can enter:

Pikachu

or:

PIKACHU

or:

pikachu

and the application can process the search without requiring a specific capitalization style.

---

# ⭐ How to Find Specific / Exclusive Pokémon

If by "exclusive Pokémon" you mean finding a particular Pokémon rather than browsing the whole list, the fastest method is the search bar.

For example:

Find Pikachu

Search:

pikachu

Find Charizard

Search:

charizard

Find Pokémon #150

Search:

150

This is useful when you already know the Pokémon you are looking for.


---

# 🎯 Finding Pokémon by Type

If you don't know the exact Pokémon name, you can use the type filters.

For example, selecting:

Fire

can narrow the results to Pokémon associated with the Fire type.

You can also use the secondary-type filter where applicable.


---

# 🧬 Finding Pokémon by Generation

The generation filter lets you narrow the Pokémon database to a particular generation.

For example:

Generation I

can be used to explore Pokémon introduced in the first generation.

This is particularly useful when exploring Pokémon from a specific era of the franchise.


---

# 🎛️ Filtering Pokémon

The filter system is designed to let users narrow down large numbers of Pokémon.

The available controls include:

Primary Type

Select a Pokémon's primary type.

Examples:
```
Fire
Water
Grass
Electric
Psychic
Ghost
Dragon
```
...

Secondary Type

A second type can be selected to further narrow the results.

For example:
```
Water + Flying
```
can be used to find Pokémon matching both type categories.

Generation

Select a generation to limit the results to Pokémon introduced in that generation.


---

# 🔄 Applying and Resetting Filters

After selecting the desired filters, use the Apply button to update the results.

If you want to clear your current filter selections, use Reset.

This gives you two simple workflows:
```
Choose filters
      ↓
   Apply
      ↓
Updated Pokémon

or:

Current filters
      ↓
    Reset
      ↓
Fresh search/filter state
```

---

# 📄 Pagination

PokéAPI contains a large number of Pokémon, so displaying every result simultaneously would make the interface unnecessarily large.

PokéRegistry herefore uses pagination.

The interface provides:

Previous and Next

buttons.

A typical navigation flow is:
```
Page 1
  ↓
Next
  ↓
Page 2
  ↓
Next
  ↓
Page 3
```
You can use Previous to return to earlier results.


---

# 📱 Responsive Design

Responsive design was an important part of PokéRegistry.

The interface adapts to different screen sizes rather than simply shrinking the desktop version.

##Desktop

The filter sidebar is visible alongside the Pokémon grid.

##Mobile

The filter sidebar becomes a sliding panel.

The transition uses CSS positioning and transform animations to create a smoother application-like experience.

The same sidebar is reused instead of creating separate desktop and mobile filter controls.

This reduces duplicated HTML and makes the interface easier to maintain.


---

# 🎨 Design

PokéRegistry uses a dark, futuristic Pokédex-inspired interface.

The visual system is based around:
```
Dark navy backgrounds

Steel-blue panels

Cyan highlights

Muted blue-gray borders

Light text

Pokémon type badges
```

The design was created with reusable CSS variables so that major colors can be changed without having to rewrite individual components.

And it also offers a Light Dark Toggle buttons for those who are used to Light Modes.

---

# ⚙️ Tech Stack

PokéRegistry is intentionally built using fundamental web technologies.

Technology	Purpose
```
HTML5	-> Page structure and semantic markup
CSS3 ->Layout, styling, responsiveness and animations.
JavaScript -> Application logic, API requests, searching and filtering.
PokéAPI-> Pokémon data
Vercel -> Deployment/hosting.
```

*No frontend framework*

The project uses vanilla JavaScript rather than React, Vue, Angular, or another frontend framework.

This keeps the project lightweight and provides direct experience with:
```
1. DOM manipulation
2. Events
3. Fetch API
4. Async JavaScript
5. API data
6. Filtering
7. Pagination
8.Responsive UI
```
---

# 🌐 Data Source — PokéAPI

PokéRegistry uses PokéAPI to retrieve Pokémon data.

The application communicates with the API to obtain information such as:
```
1. Pokémon names
2. IDs
3. Types
4. Images
5. Stats
6. Height
7. Weight
8. Generation-related information
```

This means the project doesn't need to manually maintain a huge Pokémon database.

The API acts as the application's external data source.

---

# 🗂️ Project Structure

A simplified structure of the project is:
```text
PokéRegistry/
│
├── index.html
├── style.css
├── app.js
│
├── Images/
│   └── ...
│
├── README.md
├── DOCUMENTATION.md
└── LICENSE
```

index.html:
Contains the application's structure:
```text
1. Header
2. Search interface
3. Filters
4. Pokémon list
5. Pagination
6. Footer
```
style.css:
Controls:
```text
1. Colors
2. Layout
3. Cards
4. Sidebar
5. Typography
6. Responsive behaviour
7. Animations
8. Transitions
```

app.js:

Handles the application's dynamic behaviour, including:
```text
1. API requests
2. Pokémon searching
3. Filtering
4. Pagination
5. Rendering results
6. User interactions
```
---

# 👨‍💻 Who Built It?

PokéRegistry was built by:

Adrish Datta & Shreyansh chakraborty

The project combines different areas of development.

Adrish focused heavily on the interface and visual implementation, including the structure, styling, responsive layout and animations.

Shreyansh contributed to the project's JavaScript/API functionality.

The project is therefore a collaborative web-development project rather than a single-person build.


---

# 🧠 Development Approach

Poke-Watch was designed as a progression from smaller programming projects toward a more complete web application.

The project brings together several concepts:
```
HTML
  +
CSS
  +
JavaScript
  +
REST API
  +
Responsive Design
  +
UI/UX
  ↓
PokéRegistry 
```

Instead of simply creating static Pokémon cards, the application works with live API data and allows users to interact with that data through searching, filtering and pagination.


---

# 🚀 What This Project Demonstrates

Poke-Watch demonstrates practical experience with:

Frontend Development
```
HTML structure

CSS layouts

Responsive design

CSS animations

UI components
JavaScript

DOM manipulation

Event listeners

Functions

Arrays and objects

Asynchronous programming

fetch()

API responses

Filtering

Dynamic HTML generation


API Integration
```
The project demonstrates how a frontend application can communicate with an external REST API and turn the returned data into a usable interface.
```
UI/UX
```
The project also focuses on:

```
Clear navigation

Responsive controls

Consistent visual hierarchy

Reusable styling

Smooth transitions

Mobile usability
```


---

# 🔮 Future Improvements

Possible future improvements include:
```
[ ] More detailed Pokémon information

[ ] Pokémon detail views

[ ] Improved loading states

[ ] Better error handling

[ ] More advanced sorting

[ ] Additional filters

[ ] Improved accessibility

[ ] Performance optimizations

[ ] More responsive UI refinements

[ ] Additional Pokémon data
```

These features can be added gradually without changing the core purpose of the project.


---

# 🙏 Credits

Pokémon Data

Pokémon information is provided by PokéAPI.

Pokémon

Pokémon and related intellectual property belong to their respective rights holders.

Development

Built by Adrish Datta & Shreyansh


---

# ⚠️ Disclaimer

PokéRegistry is a fan-made educational project.

It is not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak, The Pokémon Company, or their affiliates.

Pokémon names, images, characters, and related trademarks belong to their respective owners.


---

# 📜 License

The project is released under the MIT License, the repository includes the project's LICENSE file containing the full MIT License text.

For the exact licensing terms, refer to the LICENSE file included with the project.

---

# 🏁 Final Overview

PokéRegistry is a modern Pokédex application built with HTML, CSS, vanilla JavaScript and PokéAPI.

It combines a responsive interface with real API data, allowing users to search for Pokémon, filter them by type and generation, browse their information and navigate through large result sets.

The project was built as a collaborative learning/development project by Adrish Datta & Shreyansh, with an emphasis on clean frontend design, responsive behaviour, API integration and practical JavaScript development.
