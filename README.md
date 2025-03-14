## Running the project

If running on Windows, first run:
```commandline
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use --install-if-missing 22
Set-ExecutionPolicy -ExecutionPolicy ByPass  -Scope CurrentUser
```

Install npm, build, and run:
```commandline
npm install
npm run start
```