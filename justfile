##### set env #####
set shell := ["bash", "-uc"]
set dotenv-load := true


##### variables ######
APP_VERSION := "v1.0.0"


##### commands ######
build:
  yarn build

dev: build
  yarn dev

version:
    @echo {{ APP_VERSION }}

tag:
    git tag -a {{ APP_VERSION }} -m 'version up'

push:
    git push origin {{ APP_VERSION }}
