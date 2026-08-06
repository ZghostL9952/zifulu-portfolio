---
title: SportsExcitement
summary: >-
  Redesigning sign-up for a community sports app where the most involved users
  got the longest form.
role:
  - UX Design Intern
company: Sportsexcitement LLC
team: Worked with UX designers, researchers, PMs, Devs; remote team
timeline: Mar 2026 – June 2026
tools:
  - Figma
  - Figma Make
  - Claude
thumbnail: ../../assets/sportsexcitement/sports-logo-mark.png
order: 2
draft: false
---

## Context

Sportsexcitement is a community sports platform for youth and adult
leagues. Offering team management, schedules, player tracking, a gear store, and
a social feed. Parents and coaches organize, athletes play, everyone
connects.

👉 I was tasked was with redesigning the sign-up flow so users reach the app faster.

> The more involved you were, the worse sign-up got

Scenario: A mom plays rec league, coaches her daughter's team, and follows her
games. She's three users at once.

The old sign-up form let her say so. Athlete, parent, coach — all three
selectable.

Then it gave her all three sets of fields. The more role you are, the
longer your sign-up process is, before you'd seen anything the app does.

![The old sign-up on two screens, with Parent/Guardian and Coach both selected. Red dashed outlines mark the stacked field groups: parent and kid names, birth date, coaching credentials, country, address and city on the first screen, then sport, team size, age group and experience level on the second.](../../assets/sportsexcitement/old-design.png)

## We studied three competitors

I ran a competitive analysis with the UX researcher on the team. We
tested TeamSnap One (30M users), GameChanger (9M), and SportsEngine
(16M). Chosen for scale, and variety: each one handles roles differently.

We mapped four pathways through each app:

- **Athlete** joining a team
- **Parent** managing a child's participation
- **Coach** creating a team on their own
- **Coach** invited by a league admin

![Three apps, four pathways each. Only one used action-based roles, and none treated parents as primary.](../../assets/sportsexcitement/competitive-analysis.png)

Two findings mattered:

### 1. Action-based role assignment already works

GameChanger doesn't ask "are you a coach or an athlete?" It shows "Find an
existing team" and "Create new." The role comes from the tap. Lowest friction
of the three, and proof the pattern isn't theoretical.

### 2. Every competitor underserves parents

GameChanger files them under "Fan" with limited access. TeamSnap calls them
"Non-player." SportsEngine handles them best but still treats them as
secondary. Parents are the ones paying and organizing, and all three apps
treat them as an afterthought.

## The design

### Cut sign-up to the minimum.

Email, password, country, first and last name, date of birth, zip code, and terms. Seven fields, split across two screens so neither one feels long.
![Step 1 of 2, Create Account: email address, password, and country, with Continue with Google and Continue with Apple below.](../../assets/sportsexcitement/signup-1.png)

### Added email verification.

Account security, and it matches what all three competitors do.
![Check your email: six single-digit boxes for the verification code, with a resend link and a 59-second expiry.](../../assets/sportsexcitement/signup-3.png)

### Moved role assignment to the home screen.

A "Let's get started" menu with three options:

| What they tap | What they become |
| ------------- | ---------------- |
| Join a team   | Athlete          |
| Add my child  | Parent           |
| Create a team | Coach            |

<figure>
  <video
    controls
    preload="metadata"
    playsinline
    width="696"
    height="1400"
    aria-label="Screen recording of the Let's get started menu on the SportsExcitement home screen, offering Join a team, Add my child, and Create a team."
  >
    <source src="/video/action-menu.mp4" type="video/mp4" />
    Your browser cannot play this video.
  </video>
  <figcaption>Roles assign from the first action, not from a form field.</figcaption>
</figure>

GameChanger proved action-based assignment works, but it only offers two paths: find a team or create one. A parent has to pick the athlete path and then
correct it later. Adding "Add my child" as a first-class option is the
direct fix for the gap we found in all three apps.

## Working with AI

I used Claude and Figma Make to move fast, including copy
variants, edge cases I'd have missed alone. Figma Make turned an idea
into a screen in minutes.

The screens looked finished but couldn't justify themselves. Clean
layout had no answer to why any of it was that way.

So I split the work. AI for breadth, the reasoning stayed mine.

## What shipped

**Sign-up went from 15+ fields to 7, across two screens.**

I handed off the final design to the design team and the development team, documenting edge cases and haptics. The feature is still in implementation and user testing phase before my internship ended. New designers picked up my work and continued designing user verification screens.

---

_Happy to walk through the full design process that didn't make it._
