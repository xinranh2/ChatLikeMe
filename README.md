# ChatLikeMe
Summer 2020 Project


## Build:
- Fork repo
- Clone the fork to your computer
- `cd ChatLikeMe `
- `npm i`

## Edit and create Pull Request:
= git does not track empty directories, so follow this directory structure
.
├── _config.yml
├── _drafts
│   ├── begin-with-the-crazy-ideas.textile
│   └── on-simplicity-in-technology.markdown
├── _includes
│   ├── footer.html
│   └── header.html
├── _layouts
│   ├── default.html
│   └── post.html
├── _posts
│   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
│   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
│   └── members.yml
├── _site
└── index.html


- [Follow this guide](https://medium.com/singlestone/a-git-workflow-using-rebase-1b1210de83e5)
- Main app contents can be found in `src/`
- Make sure to put Dialogflow API information in a new file `env.js` as shown above


## Run:
- Open `ChatLikeMe/android/` in Android Studio and run
- Open folder in project and do `npx react-native start`
