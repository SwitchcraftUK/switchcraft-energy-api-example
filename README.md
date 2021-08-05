# Energy API full data example

A full example run through of the energy API.

## Requirements

- yarn
- node v14+

## Setup

- Install dependencies `yarn install`
- Retrieve an authorization key from Switchcraft's auth server
- Start the app with the authorization key set as an environmental variable (AUTH_KEY). You can also include the postcode (POSTCODE) and address line 1 (ADDRESS_LINE_1) as environment variables although these will be defaulted. See below for an example:

`AUTH_KEY=AUTH_KEY_GOES_HERE POSTCODE=SW130DY ADDRESS_LINE_1="14 Meredyth Road" yarn start`