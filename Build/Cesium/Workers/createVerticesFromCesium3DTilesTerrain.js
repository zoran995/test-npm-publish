/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.140.0
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

import{a as u}from"./chunk-6KXCNP63.js";import"./chunk-2MJIIVP4.js";import"./chunk-KVVKYXCH.js";import{a as f}from"./chunk-XFIQ5DEQ.js";import"./chunk-TJ4XLGBQ.js";import"./chunk-JMVFYDPO.js";import"./chunk-VHLULB34.js";import"./chunk-6TDPIZAQ.js";import"./chunk-7TVGLKQF.js";import"./chunk-SVVUOUZI.js";import"./chunk-5TJMAQVL.js";import"./chunk-W37FE5GR.js";import"./chunk-I5INJ6OS.js";import"./chunk-CUUSNIVQ.js";import"./chunk-EZMXO7WQ.js";import"./chunk-23ZQ2IVV.js";import"./chunk-XUSCFAVF.js";import"./chunk-BTSYJ5XU.js";import"./chunk-EDVBB7SS.js";import"./chunk-FFBVWF2L.js";import"./chunk-QKUIYMGC.js";import"./chunk-WBOV35NL.js";import"./chunk-TNSUQXWK.js";import"./chunk-ILRYTWTP.js";function a(c,d){return u.createMesh(c).then(function(e){let t=e.vertices.buffer,r=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,i=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,r,s,o,i,n),{verticesBuffer:t,indicesBuffer:r,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:i,northIndicesBuffer:n}})}var T=f(a);export{T as default};
