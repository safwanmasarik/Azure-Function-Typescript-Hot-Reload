# **Azure Function Typescript Hot Reload**

- Debug mode: 'Attach to Node'.
- Run no debug mode: `npm start`

Important note. Make sure `local.settings.json` does not contain below key:-
- "WEBSITE_CONTENTAZUREFILECONNECTIONSTRING"
- "WEBSITE_CONTENTSHARE"
- "WEBSITE_ENABLE_SYNC_UPDATE_SITE"
- "WEBSITE_NODE_DEFAULT_VERSION"
- "WEBSITE_RUN_FROM_PACKAGE"