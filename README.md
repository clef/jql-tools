# jql-tools

![Build Status](https://img.shields.io/travis/clef/jql-tools.svg)
![Downloads](https://img.shields.io/npm/dm/.svg)
![Downloads](https://img.shields.io/npm/dt/.svg)
![npm version](https://img.shields.io/npm/v/.svg)
![dependencies](https://img.shields.io/david/clef/jql-tools.svg)
![dev dependencies](https://img.shields.io/david/dev/clef/jql-tools.svg)
![License](https://img.shields.io/github/license/clef/jql-tools.svg)

A set of tools for writing Mixpanel JQL queries

## Installation

Install it via npm:

```shell
npm install
```

## Usage

```javascript
import { helpers } from 'jql-tools';

function main () {
  return Events({
    from_date: helpers.DateHelper.formatDate(params.fromDate),
    to_date: helpers.DateHelper.formatDate(params.toDate),
    event_selectors: params.events
  })
  .groupByUser([event => {
    return new Date(event.time).toISOString().substr(0, 10)
  }], mixpanel.reducer.noop())
  .groupBy(['key.1'], mixpanel.reducer.count())
}

export default main
```

### helpers

A collection of helpers for writing JQL queries.

#### helpers.DateHelper

#### helpers.EventHelper

### types

A collection of events for writing JQL queries.

#### types.Event

A class that represents a JQL event in Mixpanel.

## Development

To start development, run:

```shell
git clone git@github.com:clef/jql-tools.git jql-tools
cd jql-tools
npm install
npm run test
```


## License

MIT
