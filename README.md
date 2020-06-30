# ChatLikeMe
Summer 2020 Project


## Build:
- Fork repo
- Clone the fork to your computer
- `cd ChatLikeMe `
- `npm i`

## Edit and create Pull Request:
- git does not track empty directories, so follow this directory structure
- [Go here for directory structure](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/)
```
    .
    ├── src                   # Compiled files (alternatively `dist`)
        ├───assets
        ├───components
        ├───services          # APIs
             └───env.js       
        ├───styles            # CSS scripts
        ├───views             # Screen loading scripts
        └───App.js            # Main App
    ...
```

- [Follow this guide](https://medium.com/singlestone/a-git-workflow-using-rebase-1b1210de83e5)
- Main app contents can be found in `src/`
- Make sure to put Dialogflow API information in a new file `env.js` as shown above


## Run:
- Open `ChatLikeMe/android/` in Android Studio and run
- Open folder in project and do `npx react-native start`
