# **Azure Function Typescript Hot Reload**

## Problem statement
- For local API development, every time we save code, we have to stop and restart debugging mode. 
- The compilation and server start takes avg ~2min. 
- With hot-reload enablement, the debugging mode does not need to be stopped. 
- Every time code is saved, automatic compilation and api server restart will happen. 
- Assume a developer spend 1hr a day waiting for compilation. This implementation reduces it to 3min a day, hence saves 95% waiting time.

### Demo video link
- https://user-images.githubusercontent.com/35250295/201973704-b11eeb4a-8d41-4e0b-9f9b-385fdcf10846.mp4

### Clone and run locally to test
- Debug mode: 'Attach to Node'.
- Run no debug mode: `npm start`

### Important note. Make sure `local.settings.json` does not contain below key:-
- "WEBSITE_CONTENTAZUREFILECONNECTIONSTRING"
- "WEBSITE_CONTENTSHARE"
- "WEBSITE_ENABLE_SYNC_UPDATE_SITE"
- "WEBSITE_NODE_DEFAULT_VERSION"
- "WEBSITE_RUN_FROM_PACKAGE"

## Important area
- /.vscode/launch.json
```json
"configurations": [
    {
        "name": "Attach to Node Functions",
        "type": "node",
        "request": "attach",
        "port": 9229,
        "preLaunchTask": "func: host start",
        "restart": true
    }
]
```
- /.vscode/tasks.json
```json
"tasks": [
    {
        "type": "shell",
        "label": "npm build",
        "command": "npm run watch",
        "dependsOn": "npm install",
        "problemMatcher": "$tsc-watch",
        "isBackground": true
    }
]
```



