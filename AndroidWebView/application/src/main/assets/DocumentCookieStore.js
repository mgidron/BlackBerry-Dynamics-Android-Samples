/** Copyright (c) 2018 BlackBerry Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// Don't obfuscate this file.

// Placeholder to make the JavaScript appear valid. The
// `DocumentCookieStoreBridge` value comes from the Java layer.
var DocumentCookieStoreBridge;

(function(bridge) {
    Object.defineProperty(Document.prototype, 'cookie', {
        get: function() {
            return bridge.getDocumentCookie(
                document.location.hostname, document.location.pathname);
        },
        set: function(cookie) {
            bridge.setDocumentCookie(
                cookie, document.location.hostname, document.location.pathname);
        }
    });
})(DocumentCookieStoreBridge);