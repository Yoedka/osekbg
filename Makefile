upload:
	rsync -avz \
		--exclude=".svelte-kit" \
		--exclude="node_modules" \
		--exclude=".github" \
		--exclude=".git" \
		--exclude="build" \
		-e "ssh -p 8722 -i ~/.ssh/osekbg" \
		./ user@0.0.0.0:/home/user/osekbg

upload-deploy:
	rsync -avz \
		--exclude=".svelte-kit" \
		--exclude="node_modules" \
		--exclude=".github" \
		--exclude=".git" \
		--exclude="build" \
		-e "ssh -p 8722 -i ~/.ssh/osekbg" \
		./ user@0.0.0.0:/home/user/osekbg
		
	ssh -p 8722 -i ~/.ssh/osekbg \
		user@0.0.0.0 \
		"cd /home/user/osekbg; /home/user/.npm-packages/bin/pnpm i; /home/user/.npm-packages/bin/pnpm build; /home/user/.npm-packages/bin/pm2 restart server.js --update-env"

deploy:
	ssh -p 8722 -i ~/.ssh/osekbg \
		user@0.0.0.0 \
		"cd /home/user/osekbg; /home/user/.npm-packages/bin/pnpm i; /home/user/.npm-packages/bin/pnpm build; /home/user/.npm-packages/bin/pm2 restart server.js --update-env"