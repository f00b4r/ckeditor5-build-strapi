.PHONY: install build

install:
	npm install

build:
	npm run build

publish:
	npm publish --tag latest
