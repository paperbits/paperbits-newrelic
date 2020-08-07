/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */


import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { NewrelicHtmlPagePublisherPlugin } from ".";


export class NewrelicPublishModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bindToCollection("htmlPagePublisherPlugins", NewrelicHtmlPagePublisherPlugin);
    }
}