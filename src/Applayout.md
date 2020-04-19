# Watermelon
## Application Structure

This document describes the application structure of the "watermelon" application for pricing homes. This structure reflects
the work being done on the Bone-Head branch of the project.

### Component Hierarcy
```
App (root)
|
+---Header
|   |
|   +---Signed in Links
|   |
|   +---Signed out Links
|
+---Dashboard [/home or /]
|   |
|   +---Tabs
|       |
|       +---Homes
|       |   |
|       |   +---Home List
|       |   |
|       |   +---Home Summary (card) [/homes/:id]
|       |   
|       +---Comps
|       |   |
|       |   +---Comp List
|       |   |
|       |   +---Comp Summary (card) [/comps/:id]
|       |
|       +---Home Detail [/createhome]
|       |
|       +---Comp Detail [/createcomp]
|
+---Sign In [/signin]
|
+---Sign up [/signup]
```
### Folder Structure
```
/src
  /auth
     component files for authorization
  /dashboard
     component files for the home page content
  /houses
     component files for displaying information on homes
  /layout
     component files for site navigation and layout
```