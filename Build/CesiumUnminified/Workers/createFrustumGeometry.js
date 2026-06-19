/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.142.0
 *
 * Copyright 2011-2022 Cesium Contributors
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
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  FrustumGeometry_default
} from "./chunk-TW5ZZF43.js";
import "./chunk-JCYIPMJH.js";
import "./chunk-PSA5CTOI.js";
import "./chunk-3MKDDLAN.js";
import "./chunk-FLW6ISDM.js";
import "./chunk-GRB5K3CI.js";
import "./chunk-C6J67V5A.js";
import "./chunk-PZGXBCAU.js";
import "./chunk-IZDY3V37.js";
import "./chunk-K2S5XG4P.js";
import "./chunk-TKKIREQ6.js";
import "./chunk-5XHFLHYM.js";
import "./chunk-HBMN3HFY.js";
import "./chunk-BUTKP2TW.js";
import "./chunk-CNWLYL76.js";
import "./chunk-CSQB4T3T.js";
import {
  defined_default
} from "./chunk-PHLAVICN.js";

// packages/engine/Source/Workers/createFrustumGeometry.js
function createFrustumGeometry(frustumGeometry, offset) {
  if (defined_default(offset)) {
    frustumGeometry = FrustumGeometry_default.unpack(frustumGeometry, offset);
  }
  return FrustumGeometry_default.createGeometry(frustumGeometry);
}
var createFrustumGeometry_default = createFrustumGeometry;
export {
  createFrustumGeometry_default as default
};
