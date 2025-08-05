# CHANGELOG

## v3.0.0 (2025-08-05)

- Converts project to module, uses import/export syntax

## v2.0.0 (2024-07-16)

- Drops support for Node < 16
- Adds support for Node 20, 22
- Bumps dependencies

## v1.2.0 (2022-02-05)

- Adds addresses for France (closes #1)
- Bumps all dev dependencies

## v1.1.0 (2021-07-12)

- Adds a JSON linter which has been missing for some time
- Adds fallback output path values to beautify and minify utils
- Small tweaks and bump dev deps

## v1.0.0 (2021-06-27)

- Initial release under new DAD name (where the data is separate from the logic)
- Added tooling to beautify and minify json files
- Added new test suite that checks the data structure of each record better, this will allow for seemless contributing and auditing for future data sets
- Removed `addresses` key from json data since the list of address objects is inherently addresses already
- Added a beautified json list to accompalny each minified json list
