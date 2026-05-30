# Student Dashboard (Next.js)

A modern student dashboard built using Next.js, Tailwind CSS, Framer Motion, and Supabase.

## Features

* Responsive dashboard layout
* Course progress tracking
* Activity analytics section
* Animated UI with Framer Motion
* Supabase data integration
* Loading and error states
* Dark-themed interface

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Supabase
* Lucide React

## Challenges Faced

* Encountered Supabase access issues due to Row Level Security (RLS) settings during development.
* Fixed Client/Server Component conflicts while using Framer Motion.
* Improved responsive layout for mobile and tablet screens.

## Setup

1. Install dependencies

npm install

2. Create `.env.local`

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

3. Run the project

npm run dev

4. Open

http://localhost:3000
