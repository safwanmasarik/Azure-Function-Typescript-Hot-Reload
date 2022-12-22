# **Azure Function Typescript Hot Reload**

- Debug mode: 'Attach to Node'.
- Run no debug mode: `npm start`

Demo video link
- https://user-images.githubusercontent.com/35250295/201973704-b11eeb4a-8d41-4e0b-9f9b-385fdcf10846.mp4

Important note. Make sure `local.settings.json` does not contain below key:-
- "WEBSITE_CONTENTAZUREFILECONNECTIONSTRING"
- "WEBSITE_CONTENTSHARE"
- "WEBSITE_ENABLE_SYNC_UPDATE_SITE"
- "WEBSITE_NODE_DEFAULT_VERSION"
- "WEBSITE_RUN_FROM_PACKAGE"
