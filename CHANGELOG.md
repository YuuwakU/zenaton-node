# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)

## Unreleased

### Added

- Added this changelog.
- Added `.tool-versions` file for `asdf` with NodeJS configuration.
- Added `lint-staged` to auto-apply linter and formatter as pre-commit hook.
- Added `prettier` for code auto formatting.
- Added CircleCI configuration.
- Allow dispatch of single tasks.
- Added clearer error message when HTTP requests have an `ECONNREFUSED` error.
- Added MIT license file.

### Changed

- Updated `eslint` configuration to use `eslint-config-airbnb-base` rules.
- Updated npm packages.
- Update Zenaton engine URL to point to the new subdomain.
- Refactor to use async/await construct and allow local execution of workflows.

### Fixed

- Fixed all new errors found by new configuration of `eslint`.
- Fixed code format to comply with `prettier` rules.

### Deprecated

- Deprecated `[].dispatch()` and `[].execute()` in favor of using `new Parallel([]).dispatch()` and `new Parallel([]).execute()`.
- `Workflow.execute()` is now always asynchronous and returns a `Promise`.

### Removed

- Removed some dead code in `/src/v1/Services/Serializer.js`.
- Removed obsolete file `/src/v1/Services/Properties.js`.

### Security
