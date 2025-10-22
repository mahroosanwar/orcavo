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

## Features

- Multi-tenant workspaces for team collaboration
- Project and task management (CRUD, bulk update, drag-and-drop)
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
- **Charts & Analytics:** Recharts, React Big Calendar
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

## Screenshots

> **Upload screenshots in the `public/screenshots/` directory.**

| Page/Feature         | Screenshot Filename                | Description/Where to Upload                |
|----------------------|------------------------------------|--------------------------------------------|
| Landing Page         | `landing.png`                      | Main landing page before login             |
| Sign In              | `sign-in.png`                      | After user navigates to sign-in page       |
| Sign Up              | `sign-up.png`                      | After user navigates to sign-up page       |
| Dashboard            | `dashboard.png`                    | Main dashboard after login                 |
| Workspace List       | `workspace-list.png`               | Workspace switcher or list page            |
| Create Workspace     | `create-workspace.png`             | Workspace creation modal/page              |
| Project List         | `project-list.png`                 | Projects overview in a workspace           |
| Create Project       | `create-project.png`               | Project creation modal/page                |
| Project Analytics    | `project-analytics.png`            | Analytics section of a project             |
| Task Board/List      | `task-board.png`                   | Task management page/board                 |
| Member Management    | `member-management.png`            | Members list and management page           |
| Settings/Profile     | `settings.png`                     | User settings/profile page                 |
| Error Page           | `error.png`                        | Error page (e.g., 404, 500)                |

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---