# Orcavo

A fullstack project management and collaboration platform built with Next.js, React, Tailwind CSS, TypeScript, and Appwrite. Orcavo empowers teams to organize, track, and collaborate on projects efficiently with modular workspaces, robust analytics, and a modern, responsive UI.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Core Functionality](#core-functionality)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

Orcavo is a scalable project management tool designed for collaborative teams. It supports secure authentication, multi-tenant workspace management, project and task tracking, analytics dashboards, and role-based access control. The platform is built for extensibility and a seamless user experience across devices.

---

## Screenshots
<!--
### Landing Page
![Landing Page](public/screenshots/landing.png)
-->

### Sign In
![Sign In](public/screenshots/sign-in.png)

### Sign Up
![Sign Up](public/screenshots/sign-up.png)

### Dashboard
![Dashboard](public/screenshots/dashboard.png)

### Workspace List
![Workspace List](public/screenshots/workspace-list.png)

### Create Workspace
![Create Workspace](public/screenshots/create-workspace.png)

### Project List
![Project List](public/screenshots/project-list.png)

### Create Project
![Create Project](public/screenshots/create-project.png)

### Project Analytics
![Project Analytics](public/screenshots/project-analytics.png)

### Task Board/List
![Task Board/List](public/screenshots/task-board.png)

### Member Management
![Member Management](public/screenshots/member-management.png)

### Settings/Profile
![Settings/Profile](public/screenshots/settings.png)

### Error Page
![Error Page](public/screenshots/error.png)

## Features

- Multi-tenant workspaces for team collaboration
- Project and task management (CRUD, drag-and-drop(Kanban) task)
- Member management (invite, update roles, remove)
- Role-based access control
- Real-time analytics dashboards and reporting
- Secure authentication (sign up, sign in, OAuth)
- Responsive UI with reusable components and modals
- Calendar and scheduling integration
- Error handling and loading states
- Modular codebase for easy extension

---

## Tech Stack

- **Frontend:** Next.js (App Router), React 19, TypeScript, Tailwind CSS, Shadcn
- **Backend/API:** Appwrite, Hono, Node.js
- **State Management:** React Query (TanStack), React Hook Form
- **Validation:** Zod, @hookform/resolvers
- **Other:** OAuth

---

## Project Structure

```
src/
  app/                # Next.js app directory (routing, layouts, pages)
  components/         # Reusable UI and layout components
  features/           # Feature modules (auth, members, projects, tasks, workspaces)
  hooks/              # Custom React hooks
  lib/                # Library utilities (Appwrite, OAuth, session, etc.)
  config.ts           # Configuration settings
public/
  screenshots/        # Uploaded screenshots 
```

---

## Core Functionality

### Authentication & Authorization

- Sign up, sign in, sign out, and OAuth support
- User session management and middleware
- Role-based access for workspace members

### Workspaces

- Create, edit, delete, and switch between workspaces
- Invite and manage members
- Workspace-specific projects and tasks

### Projects

- Create, edit, delete projects within workspaces
- Assign members and track progress
- Project avatars, details, and analytics dashboard

### Tasks

- Create, update, delete, and bulk update tasks
- Drag-and-drop task organization
- Task assignment and status tracking
- Calendar integration for scheduling

### Members

- Invite members to workspaces
- Update member roles
- Remove members

### Analytics

- Real-time charts and dashboards for projects and workspaces
- Analytics cards and reporting

### UI/UX

- Responsive sidebar and navigation
- Modals for forms and confirmations
- Custom UI components (buttons, inputs, tables, etc.)
- Error and loading states for smooth experience

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/mahroosanwar/orcavo.git
   cd orcavo
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables** (see `env_example.txt`)
4. **Run the development server**
   ```bash
   npm run dev
   ```
5. **Build for production**
   ```bash
   npm run build
   npm start
   ```
6. **Lint the codebase**
   ```bash
   npm run lint
   ```

---