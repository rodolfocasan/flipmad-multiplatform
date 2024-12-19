# FlipMAD (Multiplatform Game)

Find and match cards before time runs out! Each level is different, offering a new challenge with varied animations and exciting difficulties. Earn coins and continue where you left off. Download or play online now and have fun! #FlipMAD


# Installation
### Clone the Repository
```bash
git clone https://github.com/rodolfocasan/flipmad-multiplatform.git
cd flipmad-multiplatform
```

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```


# Deploying as a PWA
## Deploying as an Android APK
1. Ensure you have CapacitorJS configured in the project:
   ```bash
   npm install @capacitor/core @capacitor/cli
   ```
2. Add the Android platform:
   ```bash
   npx cap add android
   ```
3. Build the web assets:
   ```bash
   npm run build
   ```
4. Copy the build to the Android project:
   ```bash
   npx cap sync
   ```
5. Open the project in Android Studio to build and generate the APK:
   ```bash
   npx cap open android
   ```


# Features
- 🃏 **Card Matching Gameplay**: Find and match cards before the timer runs out.
- 🌟 **Progressive Difficulty**: Levels become increasingly challenging with unique animations.
- 🪙 **Coin System**: Earn coins to resume where you left off or unlock new content.
- 📱 **Multiplatform**: 
  - **Progressive Web App (PWA)** for seamless browser play.
  - Android **.apk** available for download and offline play using CapacitorJS.
- 🔗 **Play Anywhere**: Play on desktop, mobile, or tablet.


# Usage
Play the game directly in your browser or install the app:
- **Web**: [Play Now](https://flipmad-multiplatform.vercel.app/)
- **Android**: Download the APK from the [Releases](https://github.com/rodolfocasan/flipmad-multiplatform/releases) section.


# Contact
For questions or feedback, feel free to reach out:
- Portfolio Website: [Rodolfo Casan](https://rodolfocasan.vercel.app/)

