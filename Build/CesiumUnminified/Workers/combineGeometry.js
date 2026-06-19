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
  PrimitivePipeline_default
} from "./chunk-2QLAGGQ7.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-XDTUT33E.js";
import "./chunk-GCENZ4KT.js";
import "./chunk-BEBJLM34.js";
import "./chunk-NCHZJSJD.js";
import "./chunk-WMFN5RDW.js";
import "./chunk-7PVYKMFB.js";
import "./chunk-PSA5CTOI.js";
import "./chunk-ONU3U3JB.js";
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
import "./chunk-PHLAVICN.js";

// packages/engine/Source/Workers/combineGeometry.js
function combineGeometry(packedParameters, transferableObjects) {
  const parameters = PrimitivePipeline_default.unpackCombineGeometryParameters(packedParameters);
  const results = PrimitivePipeline_default.combineGeometry(parameters);
  return PrimitivePipeline_default.packCombineGeometryResults(
    results,
    transferableObjects
  );
}
var combineGeometry_default = createTaskProcessorWorker_default(combineGeometry);
export {
  combineGeometry_default as default
};
