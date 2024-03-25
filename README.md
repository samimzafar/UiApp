## Prerequisites

- [Node.js >=18](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode >=12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK >=17](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-native-dimension]((https://github.com/dwicao/react-native-dimension)) for responsive height/width/font sizes.
- [react-native-linear-gradient]((https://github.com/react-native-linear-gradient/react-native-linear-gradient)) for beatifull UI Coloring.
-
## Usage

You can start by cloning this repository and using [react-native-rename](https://github.com/samimzafar/UiApp). In the current state of this project, it should give you no issues at all, just run the script, and install your node modules.

After that you should proceed as with project:

- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, svg, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `utils`: Folder for utility any kind of that you have.
  - `Hooks`: Folder for custom hooks.
  - `DummyData`: Folder for Project related Dropdown listing and topics.
  - `screens`: Folder that contains all your application screens/features.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

### iOS

1. Go to the Xcode
2. Select the workspace file
3. Select 'Simulator' as target
4. Run
