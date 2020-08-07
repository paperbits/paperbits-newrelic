/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */


import * as script from "./script.raw";
import { HtmlPagePublisherPlugin } from "@paperbits/common/publishing";
import { ISiteService } from "@paperbits/common/sites";
import { NewrelicSettings } from "../publishing/newrelicSettings";

const defaultBeacon = "bam.nr-data.net";

export class NewrelicHtmlPagePublisherPlugin implements HtmlPagePublisherPlugin {
    constructor(private readonly siteService: ISiteService) { }

    public async apply(document: Document): Promise<void> {
        const settings = await this.siteService.getSettings<any>();
        const newrelicSettings: NewrelicSettings = settings?.integration?.newrelic;

        if (!newrelicSettings?.appId) {
            return;
        }
       
        const licenseKey = newrelicSettings.licenseKey;
        const appId = newrelicSettings.appId;
        const agentId = newrelicSettings.agentId || newrelicSettings.appId;
        const accountId = newrelicSettings.accountId;
        const trustKey = newrelicSettings.trustKey || newrelicSettings.accountId;
        const beacon = newrelicSettings.beacon || defaultBeacon;
        const errorBeacon = newrelicSettings.errorBeacon || newrelicSettings.beacon || defaultBeacon;

        const scriptConfig = `;NREUM.loader_config={accountID:"${accountId}",trustKey:"${trustKey}",agentID:"${agentId}",licenseKey:"${licenseKey}",applicationID:"${appId}"};NREUM.info={beacon:"${beacon}",errorBeacon:"${errorBeacon}",licenseKey:"${licenseKey}",applicationID:"${appId}",sa:1}`;

        const bootstrapperScriptElement = document.createElement("script");
        bootstrapperScriptElement.innerHTML = script.default + scriptConfig;
        document.head.appendChild(bootstrapperScriptElement);
    }
}
