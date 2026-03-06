# 🎌 AnimeVerse

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge\&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge\&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Build-purple?style=for-the-badge\&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Framework-38bdf8?style=for-the-badge\&logo=tailwindcss)

**AnimeVerse** is a modern web platform built to showcase **anime clips, galleries, and detailed anime pages** in a visually immersive experience.

The project focuses on **modern frontend architecture**, clean UI design, and component-based development using **React + TypeScript**.

This repository also serves as a **portfolio project**, demonstrating modern web development practices and scalable frontend structure.

---

# 🌐 Project Overview

AnimeVerse is an **anime gallery and clip platform** where users can:

* browse different anime
* watch iconic clips
* explore image galleries
* search anime content
* open dedicated pages for each anime

The platform is designed to simulate the experience of **modern media browsing websites** while maintaining a clean and elegant UI.

---

# 🎥 Featured Anime

The platform currently includes content for:

* Demon Slayer
* Solo Leveling
* Lord of the Mysteries
* A Silent Voice

Each anime includes:

* banner
* cover image
* clips
* gallery images
* detailed page

---

# ✨ Core Features

## 🏠 Home Page

The homepage acts as the central navigation hub.

Sections include:

* Hero banner
* Featured animes
* Trending clips
* Gallery preview

Main components used:

* `HeroSection`
* `FeaturedAnimes`
* `TrendingClips`
* `GalleryPreview`

---

## 🎬 Video Clips

Users can browse **short anime clips** displayed as cards.

Each clip includes:

* thumbnail
* title
* anime reference
* video preview

Component used:

```
VideoCard.tsx
```

---

## 🖼 Anime Gallery

The gallery section displays anime images in a responsive grid.

Features:

* responsive layout
* clean card system
* organized visuals

Component used:

```
GalleryImageCard.tsx
```

---

## 🔎 Search System

The search page allows users to find content based on:

* anime title
* keywords
* clips

Page:

```
Search.tsx
```

---

## 📂 Anime Detail Page

Each anime has a dedicated page showing:

* anime banner
* description
* clips
* gallery content

Page:

```
AnimeDetail.tsx
```

---

# 🧠 Project Architecture

The project follows a **component-based architecture**, which is a modern standard in React development.

The structure separates the application into logical parts:

* components
* pages
* sections
* data
* utilities

This makes the project easier to scale and maintain.

---

# 🛠 Technologies Used

## Frontend Framework

* React

## Language

* TypeScript

## Build Tool

* Vite

## Styling

* TailwindCSS

## UI Components

Custom UI components located in:

```
src/components/ui
```

---

# 📁 Project Structure

Below is a simplified structure of the project.

```
AnimeVerse
│
├── public
│   └── images
│
├── src
│
│   ├── components
│   │   ├── AnimeCard.tsx
│   │   ├── VideoCard.tsx
│   │   ├── GalleryImageCard.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ui
│
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Animes.tsx
│   │   ├── AnimeDetail.tsx
│   │   ├── Videos.tsx
│   │   ├── Gallery.tsx
│   │   ├── Search.tsx
│   │   └── About.tsx
│
│   ├── sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedAnimes.tsx
│   │   ├── TrendingClips.tsx
│   │   └── GalleryPreview.tsx
│
│   ├── data
│   │   └── animes.ts
│
│   ├── hooks
│   │   └── use-mobile.ts
│
│   ├── lib
│   │   └── utils.ts
│
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
└── package.json
```

---

# ⚙ How to Run the Project

### 1 Clone the repository

```
git clone https://github.com/your-username/animeverse.git
```

---

### 2 Open the project folder

```
cd animeverse
```

---

### 3 Install dependencies

```
npm install
```

---

### 4 Run development server

```
npm run dev
```

The project will start on:

```
https://animeverse-gold.vercel.app
```

---

# 📦 Build for Production

To generate a production build:

```
npm run build
```

The compiled project will be generated inside:

```
dist/
```

---

# 📱 Responsive Design

AnimeVerse is fully responsive and works on:

* Desktop
* Tablet
* Mobile devices

Responsive design is implemented using **TailwindCSS utilities**.

---

# 🧩 Component System

The project heavily relies on reusable components.

Examples:

* `AnimeCard`
* `VideoCard`
* `GalleryImageCard`
* `Header`
* `Footer`

This approach makes it easy to **expand the platform with new features**.

---

# 🔮 Future Improvements

Possible upgrades for the platform:

* user authentication
* favorites system
* comment section
* anime rating system
* backend integration
* database storage
* admin dashboard for content upload

These features could transform AnimeVerse into a **complete anime media platform**.

---

# 🤝 Contributing

Contributions are welcome.

Steps to contribute:

1 Fork the repository

2 Create a new branch

```
git checkout -b feature/new-feature
```

3 Commit changes

```
git commit -m "Add new feature"
```

4 Push to GitHub

```
git push origin feature/new-feature
```

5 Open a Pull Request

---

# 📜 License

This project is intended for **educational and portfolio purposes**.

All anime content belongs to their respective creators and studios.

---

# 👨‍💻 Author

Developed by **Davi HDS**

Computer Science student focused on:

* Web Development
* UI Design
* Interactive Media Platforms
