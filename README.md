<div align="center">

# Dummy Address Data (DAD)

Dummy Address Data (DAD) - Real addresses from all around the world.

[![Build Status](https://github.com/Justintime50/dad/workflows/build/badge.svg)](https://github.com/Justintime50/dad/actions)
[![Version](https://img.shields.io/github/v/tag/justintime50/dad)](https://github.com/justintime50/dad/releases)
[![Licence](https://img.shields.io/github/license/justintime50/dad)](https://opensource.org/licenses/mit-license.php)

<img src="assets/showcase.png" alt="Showcase">

</div>

DAD is the perfect companion to quickly bootstrap address data in your application. DAD provides real addresses from all over the world with a consistent data structure so you can spend less time looking up addresses and address rules and more time coding.

## Install

You can download a copy of this data be either cloning this repo or downloading the data sets from the [releases page](https://github.com/justintime50/dad/releases).

## Address Data

Address objects will look like the [sample below](#sample-address-object). The data type of each field on an address object is a `string`. A list of addresses is an `array` of `json` objects.

Attempts have been made to verify addresses and ensure that street1, city, state, and zip are present on all records. Some lists may be shorter than others to avoid complexity or because of a lack of accurate data.

The following files can be found in the `src/addresses` directory.

## Australia

| Filename                    | Locations       | Address Count |
| --------------------------- | --------------- | ------------- |
| australia/vt-addresses.json | Victoria Area   | 5             |

## Canada

| Filename                 | Locations       | Address Count |
| ------------------------ | --------------- | ------------- |
| canada/bc-addresses.json | BC Area         | 5             |

## China

| Filename                | Locations                 | Address Count |
| ----------------------- | ------------------------- | ------------- |
| china/bj-addresses.json | Beijing Area              | 5             |
| china/hk-addresses.json | Hong Kong - Wan Chai Area | 5             |

## Europe

| Filename                 | Locations                     | Address Count |
| ------------------------ | ----------------------------- | ------------- |
| europe/de-addresses.json | Germany - Wesel Area          | 5             |
| europe/es-addresses.json | Spain - Countrywide           | 5             |
| europe/uk-addresses.json | United Kingdom - England Area | 5             |

## Mexico

| Filename                 | Locations                     | Address Count |
| ------------------------ | ----------------------------- | ------------- |
| mexico/mx-addresses.json | Mexico - Mexico City Area     | 5             |

## United States

| Filename                        | Locations                 | Address Count |
| ------------------------------- | ------------------------- | ------------- |
| united-states/az-addresses.json | Arizona - Gilbert Area    | 100           |
| united-states/ca-addresses.json | California - Anaheim Area | 100           |
| united-states/id-addresses.json | Idaho - Boise Area        | 100           |
| united-states/ks-addresses.json | Kansas - Barton County    | 100           |
| united-states/nv-addresses.json | Nevada - Lincoln Area     | 100           |
| united-states/ny-addresses.json | New York - Rochester Area | 100           |
| united-states/or-addresses.json | Oregon - Portland Area    | 100           |
| united-states/tx-addresses.json | Texas - Austin Area       | 100           |
| united-states/ut-addresses.json | Utah - Provo Area         | 100           |
| united-states/wa-addresses.json | Washington - Spokane Area | 100           |

### Sample Address Object

A sample address object will look like the following:

```json
{
    "street1": "231 N 1200 W",
    "street2": "UNIT 104",
    "city": "OREM",
    "state": "UT",
    "zip": "84057",
    "country": "US"
}
```

### Sample ISO Country Object

```json
{
    "country": "United States of America",
    "alpha_2_code": "US",
    "alpha_3_code": "USA"
}
```

## Development

```bash
# Lint the project
npm run lint

# Run tests
npm run test
```

### Utilities

**Create Slim List**

To create the slim lists from a larger dataset, use the `createSlimJson.js` tool in the `utils` folder. See the script for additional information. This tool will grab 100 random addresses (by default) from a larger JSON dataset and create a new slim file that can be added to DAD.

```bash
DATA_SET=path/to/dataset.json STATE=UT COUNTRY=US node utils/createSlimJson.js
```

**Beautify and Minify Lists**

Additional tooling is provided for convenience when adding new data sets that allow you to beautify a JSON list or minify it.

```bash
INPUT_FILE=path/to/input.json OUTPUT_FILE=path/to/output.json node utils/minifyJson.js
```

## Contributing

This data is very laborious to build - any contributions are welcome! Open a PR or issue with additions or fixes. 

Lists of addresses must contain at least 5 addresses and not exceed 100 records. Both the beautified and minified lists must be present. Addresses that are not a part of the OpenAddress Project must be publicly well-known addresses (government buildings, hospitals, museums, landmarks, etc). All keys of an address record must be present and all of their values must be strings. The current test suite should enforce these standards.

## Disclaimer

As these addresses are public knowledge and open sourced, I take no responsibility for their use. If you'd like an address removed from the list, submit an issue.

## Attribution

- Many of the addresses are provided from the [OpenAddress Project](https://openaddresses.io), others are publicly well-known landmarks.
- `DAD` is conceptually based on [RRAD](https://github.com/EthanRBrown/rrad).
- Showcase icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.
