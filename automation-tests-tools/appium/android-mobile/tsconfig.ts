{
  "compilerOptions": {
    "target": "ES2016",
    "module": "CommonJS",
    "lib": ["es2022", "dom"],
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true,
    "types": [
      "node",
      "@wdio/globals/types",
      "@wdio/mocha-framework",
      "expect-webdriverio",
      "@wdio/visual-service"
    ],
    "noUnusedLocals": false,
    "noUnusedParameters": false
  },
  "include": [
    "wdio.conf.ts",
    "./automation-tests/**/*",
    "test/**/*.ts"
  ]
