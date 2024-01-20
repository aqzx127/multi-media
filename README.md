# Multi-Media App
 - Place where you can discuss and rate all types of media (movies, music, games, ect)
 - Frontend: Vite React.ts
 - Backend:  Django 
 - Database: PostgreSQL
 - Data: External APIs

# Features
 - User Accounts
 - Rate and Share Media
 - Personalized Real-Time Feed
 - Media Searching and Linking
 - Commenting on Posts
 - View others Profiles and Posts

# Backend Services

## TODOS:

[ ] UserProfile Service
  Manages creation and passing of user profiles to Data Service
  [ ] User Class Structure
    - Username
    - Email
    - Password

    Profile Class Structure
    - Name
    - Bio
    - Region
    - Top Movies

[ ] User Data Service 
  - Manages posting/fetching user profile to/from DB

[ ] Posts Service (RSS feed)
  - Feed
  - Comments
  - Recommendations
  
[ ] Statistics Algorithms Service (Table View of Media)
  - Stat Service queries DB for global statistics

[ ] API Service
  - In charge of fetching and passing of media data from external APIs (Movies, Shows, Music, Games, Books, ect) to our services
  
