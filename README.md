1. Create a new Expo project and replace files with the ones above or copy files into the project.
2. npm install (or yarn ) to install dependencies.
3. expo start and run on Android/iOS emulator or device.
Notes: - This project uses only core RN components and react-navigation v6. - The LegacyClock class
component shows componentDidMount / componentWillUnmount in action and is used on the Feed
screen. - Screen transition/animation: EventDetails uses an Animated header fade-in (demonstrates custom
header animation). You can further customize stack transitions via cardStyleInterpolator in
EventsStack.js .