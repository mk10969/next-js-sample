##### set env #####

set shell := ["bash", "-uc"]
set dotenv-load := true


##### variables ######

APP_NAME := `cat package.json | jq .name`
APP_VERSION := `cat package.json | jq .version`


##### commands ######

app:
    @echo {{ APP_NAME }}

version:
    @echo {{ APP_VERSION }}


maskedlm-build:
    wasm-pack build maskedlm -d ../wasm

maskedlm-clean:
    rm -fr ./wasm/*

build:
    yarn build

dev: build
    yarn dev


tag:
    git tag -a {{ APP_VERSION }} -m 'version up'

push:
    git push origin {{ APP_VERSION }}
