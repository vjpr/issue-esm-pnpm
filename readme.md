# esm not working with pnpm

Works

```
node --experimental-modules main.mjs
```

Doesn't work

```
node index.js
```

```
{ request: 'is-regexp',
  parent:
   Module {
     children: [],
     exports: {},
     filename: '/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/stringify-object/index.js',
     id: '/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/stringify-object/index.js',
     loaded: false,
     parent: undefined,
     paths:
      [ '/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/stringify-object/node_modules',
        '/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules',
        '/Users/Vaughan/dev-scratch/node_modules',
        '/Users/Vaughan/node_modules',
        '/Users/node_modules',
        '/node_modules' ] } }
/Users/Vaughan/dev-scratch/esm-pnpm-issue/index.js:1
Error: Cannot find module 'is-regexp'
    at Proxy.Module._resolveFilename (/Users/Vaughan/dev-scratch/esm-pnpm-issue/index.js:9:39)
    at Object.<anonymous> (/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/stringify-object/index.js:2:18)
```

Doesn't work

```
node -r esm index.js
```

```
{ request: 'is-regexp',
  parent: Module {
     children: [],
     exports: {},
     filename: '/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/stringify-object/index.js',
     id: '/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/stringify-object/index.js',
     loaded: false,
     parent: undefined,
     paths: [ '/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/stringify-object/node_modules',
        '/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules',
        '/Users/Vaughan/dev-scratch/node_modules',
        '/Users/Vaughan/node_modules',
        '/Users/node_modules',
        '/node_modules' ] } }
/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/.registry.npmjs.org/esm/3.0.72/node_modules/esm/esm.js:1
Error: Cannot find module 'is-regexp'
    at Proxy.<anonymous> (/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/.registry.npmjs.org/esm/3.0.72/node_modules/esm/esm.js:1)
    at Proxy.require.Module._resolveFilename (/Users/Vaughan/dev-scratch/esm-pnpm-issue/index.js:9:39)
    at Proxy.<anonymous> (/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/.registry.npmjs.org/esm/3.0.72/node_modules/esm/esm.js:1)
    at Object.<anonymous> (/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/.registry.npmjs.org/esm/3.0.72/node_modules/esm/esm.js:1)
    at Object.t (/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/.registry.npmjs.org/esm/3.0.72/node_modules/esm/esm.js:1)
    at o (/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/.registry.npmjs.org/esm/3.0.72/node_modules/esm/esm.js:1)
    at Object.<anonymous> (/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/stringify-object/index.js:2:18)
    at Object.<anonymous> (/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/.registry.npmjs.org/esm/3.0.72/node_modules/esm/esm.js:1)
    at xu (/Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/.registry.npmjs.org/esm/3.0.72/node_modules/esm/esm.js:1)
    at /Users/Vaughan/dev-scratch/esm-pnpm-issue/node_modules/.registry.npmjs.org/esm/3.0.72/node_modules/esm/esm.js:1
```