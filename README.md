# New Relic integration for Paperbits
 
This repository contains an integration with New Relic (https://newrelic.com) - an observability platform built to help engineers create more perfect software. From monoliths to serverless, you can instrument everything, then analyze, troubleshoot, and optimize your entire software stack. All from one place.

[![Join the chat at https://gitter.im/paperbits/discussions](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/paperbits/discussions)



## Installation

```bash
npm i @paperbits/newrelic --save
```

## Usage
Add imports and registration to `startup.publish.ts` file of your project:

```ts
import { NewrelicPublishModule } from "@paperbits/newrelic";
injector.bindModule(new NewrelicPublishModule());
```

Add NewRelic integration settings to your application data:
```json
{
    "settings": {
        "integration": {
            "newrelic": {
                "licenseKey": "NRJS-XXXXXXXXXXXXXXXXXXX",
                "appId": "XXXXXXXXX",
                "accountId": "XXXXXXX"
            }
        }
    }
}

```

## License
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file and at https://paperbits.io/license/mit.

2020 (c) Copyright Paperbits. All Rights Reserved.
