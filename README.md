# OsekBG - Remove Background image

Word `Osek` is adapted from [Sasak Language](https://id.wikipedia.org/wiki/Bahasa_Sasak) that means `remove`. And I call it `OsekBG` which stands for `Osek Background` or `Remove Background`

## Deployment

### Send source code to the Linux Server
```bash
rsync -avz \
  --exclude=".svelte-kit" \
  --exclude="node_modules" \
  --exclude=".github" \
  --exclude=".git" \
  --exclude="build" \
  -e "ssh -p <PORT> -i ~/.ssh/<SSH_PRIVATE_KEY>" \
  ./ <USER>@<IP_ADDRESS>:<PATH_TO_DIR>
```

### Install Dependencies
```bash
pnpm install
```

### Build

```bash
pnpm build
```
If build success, build artifact available at `./build`. Now set environment to production

```bash
export NODE_ENV=production
```

### Setup pm2

Install pm2 globally
```bash
npm install -g pm2
```

Start the app as daemond service
```bash
pm2 start server.js --name "OsekBG"
```

## Continous Deployment

Just run the Makefile script
```bash
make upload-deploy
```