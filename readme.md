# esm not working with pnpm

Works

```
node --experimental-modules main.mjs
```

Doesn't work

```
node -r esm index.js
```