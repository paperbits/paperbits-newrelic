/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */


/**
 * Settings required to bootstrap Newrelic client.
 */
export interface NewrelicSettings {
    /**
     * Application ID, e.g. "123456789".
     */
    appId: string;

    /**
     * License key, e.g. NRJS-XXXXXXXXXXXXXXXXXXX
     */
    licenseKey: string;

    /**
     * Agent ID, e.g. "123456789".
     */
    agentId?: string;

    /**
     * e.g. "1234567".
     */
    accountId: string;

    /**
     * Trust key, e.g. "1234567".
     */
    trustKey?: string;

    /**
     * Beacon endpoint, e.g. "bam.nr-data.net".
     */
    beacon?: string;

    /**
     * Error beacon endpoint, e.g. "bam.nr-data.net".
     */
    errorBeacon?: string;
}