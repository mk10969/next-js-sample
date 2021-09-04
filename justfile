##### set env #####
set shell := ["bash", "-uc"]
set dotenv-load := true


##### variables ######
APP_NAME        := `cat package.json | jq .name`
APP_VERSION     := `cat package.json | jq .version`


##### commands ######
# app name
app:
    @echo {{ APP_NAME }}

# app version
version:
    @echo {{ APP_VERSION }}

# wasm build
wasm-build:
    wasm-pack build wasm

# yarn build
build:
    yarn build

# yarn dev
dev: build
    yarn dev

# git tag
tag:
    git tag -a {{ APP_VERSION }} -m 'version up'

# git tag push
push:
    git push origin {{ APP_VERSION }}
