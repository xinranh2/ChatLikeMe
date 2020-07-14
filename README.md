# ChatLikeMe
Summer 2020 Project


## Build:
- Fork repo
- Clone the fork to your computer
- `cd ChatLikeMe `
- `npm i`
- `npx react-native link react-native-dialogflow`
- `npx react-native link react-native-voice`


## Edit and create Pull Request:
- git does not track empty directories, so follow this directory structure
- [Go here for directory structure details](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/)
```
    .
    ├── src                  
        ├───assets
        ├───components
        ├───services          # APIs
             └───env.js       
        ├───styles            # CSS scripts
        ├───views             # Screen loading scripts
        └───App.js            # Main App
    ...
```

- [Read this guide](https://medium.com/singlestone/a-git-workflow-using-rebase-1b1210de83e5)
- Main app contents can be found in `src/`
- Make sure to put Dialogflow API information in a new file `env.js` as shown above


## Run:
- Open `ChatLikeMe/android/` in Android Studio and run
- Open folder in project and do `npx react-native start`
