# CHANGELOG

## v1.1.0 (2021-07-12)

* Adds a JSON linter which has been missing for some time
* Adds fallback output path values to beautify and minify utils
* Small tweaks and bump dev deps

## v1.0.0 (2021-06-27)

* Initial release under new DAD name (where the data is separate from the logic)
* Added tooling to beautify and minify json files
* Added new test suite that checks the data structure of each record better, this will allow for seemless contributing and auditing for future data sets
* Removed `addresses` key from json data since the list of address objects is inherently addresses already
* Added a beautified json list to accompalny each minified json list
