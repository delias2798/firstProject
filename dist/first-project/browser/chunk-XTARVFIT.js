import{B as x,C as c,n as P,u as R,x as I,z as u}from"./chunk-WHUUA6IU.js";var m=(()=>{class e{static CompareLightsPriority(r,a){return r.shadowEnabled!==a.shadowEnabled?(a.shadowEnabled?1:0)-(r.shadowEnabled?1:0):a.renderPriority-r.renderPriority}}return e.FALLOFF_DEFAULT=0,e.FALLOFF_PHYSICAL=1,e.FALLOFF_GLTF=2,e.FALLOFF_STANDARD=3,e.LIGHTMAP_DEFAULT=0,e.LIGHTMAP_SPECULAR=1,e.LIGHTMAP_SHADOWSONLY=2,e.INTENSITYMODE_AUTOMATIC=0,e.INTENSITYMODE_LUMINOUSPOWER=1,e.INTENSITYMODE_LUMINOUSINTENSITY=2,e.INTENSITYMODE_ILLUMINANCE=3,e.INTENSITYMODE_LUMINANCE=4,e.LIGHTTYPEID_POINTLIGHT=0,e.LIGHTTYPEID_DIRECTIONALLIGHT=1,e.LIGHTTYPEID_SPOTLIGHT=2,e.LIGHTTYPEID_HEMISPHERICLIGHT=3,e})();function Ee(e){e.indexOf("vClipPlane")===-1&&e.push("vClipPlane"),e.indexOf("vClipPlane2")===-1&&e.push("vClipPlane2"),e.indexOf("vClipPlane3")===-1&&e.push("vClipPlane3"),e.indexOf("vClipPlane4")===-1&&e.push("vClipPlane4"),e.indexOf("vClipPlane5")===-1&&e.push("vClipPlane5"),e.indexOf("vClipPlane6")===-1&&e.push("vClipPlane6")}function ue(e,t,r){let a=!!(e.clipPlane??t.clipPlane),n=!!(e.clipPlane2??t.clipPlane2),i=!!(e.clipPlane3??t.clipPlane3),o=!!(e.clipPlane4??t.clipPlane4),l=!!(e.clipPlane5??t.clipPlane5),E=!!(e.clipPlane6??t.clipPlane6);a&&r.push("#define CLIPPLANE"),n&&r.push("#define CLIPPLANE2"),i&&r.push("#define CLIPPLANE3"),o&&r.push("#define CLIPPLANE4"),l&&r.push("#define CLIPPLANE5"),E&&r.push("#define CLIPPLANE6")}function _(e,t,r){let a=!1,n=!!(e.clipPlane??t.clipPlane),i=!!(e.clipPlane2??t.clipPlane2),o=!!(e.clipPlane3??t.clipPlane3),l=!!(e.clipPlane4??t.clipPlane4),E=!!(e.clipPlane5??t.clipPlane5),s=!!(e.clipPlane6??t.clipPlane6);return r.CLIPPLANE!==n&&(r.CLIPPLANE=n,a=!0),r.CLIPPLANE2!==i&&(r.CLIPPLANE2=i,a=!0),r.CLIPPLANE3!==o&&(r.CLIPPLANE3=o,a=!0),r.CLIPPLANE4!==l&&(r.CLIPPLANE4=l,a=!0),r.CLIPPLANE5!==E&&(r.CLIPPLANE5=E,a=!0),r.CLIPPLANE6!==s&&(r.CLIPPLANE6=s,a=!0),a}function fe(e,t,r){let a=t.clipPlane??r.clipPlane;S(e,"vClipPlane",a),a=t.clipPlane2??r.clipPlane2,S(e,"vClipPlane2",a),a=t.clipPlane3??r.clipPlane3,S(e,"vClipPlane3",a),a=t.clipPlane4??r.clipPlane4,S(e,"vClipPlane4",a),a=t.clipPlane5??r.clipPlane5,S(e,"vClipPlane5",a),a=t.clipPlane6??r.clipPlane6,S(e,"vClipPlane6",a)}function S(e,t,r){r&&e.setFloat4(t,r.normal.x,r.normal.y,r.normal.z,r.d)}var O=R.Black(),M={NUM_MORPH_INFLUENCERS:0};function Ne(e,t,r){if(!e||e.LOGARITHMICDEPTH||e.indexOf&&e.indexOf("LOGARITHMICDEPTH")>=0){let a=r.activeCamera;a.mode===1&&I.Error("Logarithmic depth is not compatible with orthographic cameras!",20),t.setFloat("logarithmicDepthConstant",2/(Math.log(a.maxZ+1)/Math.LN2))}}function Pe(e,t,r,a=!1){r&&e.fogEnabled&&(!t||t.applyFog)&&e.fogMode!==0&&(r.setFloat4("vFogInfos",e.fogMode,e.fogStart,e.fogEnd,e.fogDensity),a?(e.fogColor.toLinearSpaceToRef(O,e.getEngine().useExactSrgbConversions),r.setColor3("vFogColor",O)):r.setColor3("vFogColor",e.fogColor))}function Ie(e,t,r){M.NUM_MORPH_INFLUENCERS=r,D(e,t,M)}function D(e,t,r){let a=r.NUM_MORPH_INFLUENCERS;if(a>0&&P.LastCreatedEngine){let n=P.LastCreatedEngine.getCaps().maxVertexAttribs,i=t.morphTargetManager;if(i?.isUsingTextureForTargets)return;let o=i&&i.supportsNormals&&r.NORMAL,l=i&&i.supportsTangents&&r.TANGENT,E=i&&i.supportsUVs&&r.UV1;for(let s=0;s<a;s++)e.push("position"+s),o&&e.push("normal"+s),l&&e.push("tangent"+s),E&&e.push("uv_"+s),e.length>n&&I.Error("Cannot add more vertex attributes for mesh "+t.name)}}function h(e,t=!1){e.push("world0"),e.push("world1"),e.push("world2"),e.push("world3"),t&&(e.push("previousWorld0"),e.push("previousWorld1"),e.push("previousWorld2"),e.push("previousWorld3"))}function L(e,t){let r=e.morphTargetManager;!e||!r||t.setFloatArray("morphTargetInfluences",r.influences)}function de(e,t){t.bindToEffect(e,"Scene")}function Re(e,t,r){t._needUVs=!0,t[r]=!0,e.optimizeUVAllocation&&e.getTextureMatrix().isIdentityAs3x2()?(t[r+"DIRECTUV"]=e.coordinatesIndex+1,t["MAINUV"+(e.coordinatesIndex+1)]=!0):t[r+"DIRECTUV"]=0}function xe(e,t,r){let a=e.getTextureMatrix();t.updateMatrix(r+"Matrix",a)}function C(e,t,r){r.BAKED_VERTEX_ANIMATION_TEXTURE&&r.INSTANCES&&e.push("bakedVertexAnimationSettingsInstanced")}function U(e,t){return t.set(e),t}function F(e,t,r){if(!(!t||!e)&&(e.computeBonesUsingShaders&&t._bonesComputationForcedToCPU&&(e.computeBonesUsingShaders=!1),e.useBones&&e.computeBonesUsingShaders&&e.skeleton)){let a=e.skeleton;if(a.isUsingTextureForMatrices&&t.getUniformIndex("boneTextureWidth")>-1){let n=a.getTransformMatrixTexture(e);t.setTexture("boneSampler",n),t.setFloat("boneTextureWidth",4*(a.bones.length+1))}else{let n=a.getTransformMatrices(e);n&&(t.setMatrices("mBones",n),r&&e.getScene().prePassRenderer&&e.getScene().prePassRenderer.getIndex(2)&&(r.previousBones[e.uniqueId]||(r.previousBones[e.uniqueId]=n.slice()),t.setMatrices("mPreviousBones",r.previousBones[e.uniqueId]),U(n,r.previousBones[e.uniqueId])))}}}function V(e,t,r,a,n,i=!0){e._bindLight(t,r,a,n,i)}function _e(e,t,r,a,n=4){let i=Math.min(t.lightSources.length,n);for(let o=0;o<i;o++){let l=t.lightSources[o];V(l,o,e,r,typeof a=="boolean"?a:a.SPECULARTERM,t.receiveShadows)}}function Oe(e,t,r,a){r.NUM_BONE_INFLUENCERS>0&&(a.addCPUSkinningFallback(0,t),e.push("matricesIndices"),e.push("matricesWeights"),r.NUM_BONE_INFLUENCERS>4&&(e.push("matricesIndicesExtra"),e.push("matricesWeightsExtra")))}function Me(e,t){(t.INSTANCES||t.THIN_INSTANCES)&&h(e,!!t.PREPASS_VELOCITY),t.INSTANCESCOLOR&&e.push("instanceColor")}function Le(e,t,r=4,a=0){let n=0;for(let i=0;i<r&&e["LIGHT"+i];i++)i>0&&(n=a+i,t.addFallback(n,"LIGHT"+i)),e.SHADOWS||(e["SHADOW"+i]&&t.addFallback(a,"SHADOW"+i),e["SHADOWPCF"+i]&&t.addFallback(a,"SHADOWPCF"+i),e["SHADOWPCSS"+i]&&t.addFallback(a,"SHADOWPCSS"+i),e["SHADOWPOISSON"+i]&&t.addFallback(a,"SHADOWPOISSON"+i),e["SHADOWESM"+i]&&t.addFallback(a,"SHADOWESM"+i),e["SHADOWCLOSEESM"+i]&&t.addFallback(a,"SHADOWCLOSEESM"+i));return n++}function b(e,t){return t.fogEnabled&&e.applyFog&&t.fogMode!==0}function Ce(e,t,r,a,n,i,o,l=!1){o._areMiscDirty&&(o.LOGARITHMICDEPTH=r,o.POINTSIZE=a,o.FOG=n&&b(e,t),o.NONUNIFORMSCALING=e.nonUniformScaling,o.ALPHATEST=i,o.DECAL_AFTER_DETAIL=l)}function Fe(e,t,r,a,n=4,i=!1){if(!r._areLightsDirty)return r._needNormals;let o=0,l={needNormals:r._needNormals,needRebuild:!1,lightmapMode:!1,shadowEnabled:!1,specularEnabled:!1};if(e.lightsEnabled&&!i){for(let s of t.lightSources)if(B(e,t,s,o,r,a,l),o++,o===n)break}r.SPECULARTERM=l.specularEnabled,r.SHADOWS=l.shadowEnabled;for(let s=o;s<n;s++)r["LIGHT"+s]!==void 0&&(r["LIGHT"+s]=!1,r["HEMILIGHT"+s]=!1,r["POINTLIGHT"+s]=!1,r["DIRLIGHT"+s]=!1,r["SPOTLIGHT"+s]=!1,r["SHADOW"+s]=!1,r["SHADOWCSM"+s]=!1,r["SHADOWCSMDEBUG"+s]=!1,r["SHADOWCSMNUM_CASCADES"+s]=!1,r["SHADOWCSMUSESHADOWMAXZ"+s]=!1,r["SHADOWCSMNOBLEND"+s]=!1,r["SHADOWCSM_RIGHTHANDED"+s]=!1,r["SHADOWPCF"+s]=!1,r["SHADOWPCSS"+s]=!1,r["SHADOWPOISSON"+s]=!1,r["SHADOWESM"+s]=!1,r["SHADOWCLOSEESM"+s]=!1,r["SHADOWCUBE"+s]=!1,r["SHADOWLOWQUALITY"+s]=!1,r["SHADOWMEDIUMQUALITY"+s]=!1);let E=e.getEngine().getCaps();return r.SHADOWFLOAT===void 0&&(l.needRebuild=!0),r.SHADOWFLOAT=l.shadowEnabled&&(E.textureFloatRender&&E.textureFloatLinearFiltering||E.textureHalfFloatRender&&E.textureHalfFloatLinearFiltering),r.LIGHTMAPEXCLUDED=l.lightmapMode,l.needRebuild&&r.rebuild(),l.needNormals}function B(e,t,r,a,n,i,o){switch(o.needNormals=!0,n["LIGHT"+a]===void 0&&(o.needRebuild=!0),n["LIGHT"+a]=!0,n["SPOTLIGHT"+a]=!1,n["HEMILIGHT"+a]=!1,n["POINTLIGHT"+a]=!1,n["DIRLIGHT"+a]=!1,r.prepareLightSpecificDefines(n,a),n["LIGHT_FALLOFF_PHYSICAL"+a]=!1,n["LIGHT_FALLOFF_GLTF"+a]=!1,n["LIGHT_FALLOFF_STANDARD"+a]=!1,r.falloffType){case m.FALLOFF_GLTF:n["LIGHT_FALLOFF_GLTF"+a]=!0;break;case m.FALLOFF_PHYSICAL:n["LIGHT_FALLOFF_PHYSICAL"+a]=!0;break;case m.FALLOFF_STANDARD:n["LIGHT_FALLOFF_STANDARD"+a]=!0;break}if(i&&!r.specular.equalsFloats(0,0,0)&&(o.specularEnabled=!0),n["SHADOW"+a]=!1,n["SHADOWCSM"+a]=!1,n["SHADOWCSMDEBUG"+a]=!1,n["SHADOWCSMNUM_CASCADES"+a]=!1,n["SHADOWCSMUSESHADOWMAXZ"+a]=!1,n["SHADOWCSMNOBLEND"+a]=!1,n["SHADOWCSM_RIGHTHANDED"+a]=!1,n["SHADOWPCF"+a]=!1,n["SHADOWPCSS"+a]=!1,n["SHADOWPOISSON"+a]=!1,n["SHADOWESM"+a]=!1,n["SHADOWCLOSEESM"+a]=!1,n["SHADOWCUBE"+a]=!1,n["SHADOWLOWQUALITY"+a]=!1,n["SHADOWMEDIUMQUALITY"+a]=!1,t&&t.receiveShadows&&e.shadowsEnabled&&r.shadowEnabled){let l=r.getShadowGenerator(e.activeCamera)??r.getShadowGenerator();if(l){let E=l.getShadowMap();E&&E.renderList&&E.renderList.length>0&&(o.shadowEnabled=!0,l.prepareDefines(n,a))}}r.lightmapMode!=m.LIGHTMAP_DEFAULT?(o.lightmapMode=!0,n["LIGHTMAPEXCLUDED"+a]=!0,n["LIGHTMAPNOSPECULAR"+a]=r.lightmapMode==m.LIGHTMAP_SHADOWSONLY):(n["LIGHTMAPEXCLUDED"+a]=!1,n["LIGHTMAPNOSPECULAR"+a]=!1)}function ge(e,t,r,a,n,i=null,o=!1){let l=G(e,a);i!==!1&&(l=_(r,e,a)),a.DEPTHPREPASS!==!t.getColorWrite()&&(a.DEPTHPREPASS=!a.DEPTHPREPASS,l=!0),a.INSTANCES!==n&&(a.INSTANCES=n,l=!0),a.THIN_INSTANCES!==o&&(a.THIN_INSTANCES=o,l=!0),l&&a.markAsUnprocessed()}function v(e,t){if(e.useBones&&e.computeBonesUsingShaders&&e.skeleton){t.NUM_BONE_INFLUENCERS=e.numBoneInfluencers;let r=t.BONETEXTURE!==void 0;if(e.skeleton.isUsingTextureForMatrices&&r)t.BONETEXTURE=!0;else{t.BonesPerMesh=e.skeleton.bones.length+1,t.BONETEXTURE=r?!1:void 0;let a=e.getScene().prePassRenderer;if(a&&a.enabled){let n=a.excludedSkinnedMesh.indexOf(e)===-1;t.BONES_VELOCITY_ENABLED=n}}}else t.NUM_BONE_INFLUENCERS=0,t.BonesPerMesh=0,t.BONETEXTURE!==void 0&&(t.BONETEXTURE=!1)}function H(e,t){let r=e.morphTargetManager;r?(t.MORPHTARGETS_UV=r.supportsUVs&&t.UV1,t.MORPHTARGETS_TANGENT=r.supportsTangents&&t.TANGENT,t.MORPHTARGETS_NORMAL=r.supportsNormals&&t.NORMAL,t.NUM_MORPH_INFLUENCERS=r.numMaxInfluencers||r.numInfluencers,t.MORPHTARGETS=t.NUM_MORPH_INFLUENCERS>0,t.MORPHTARGETS_TEXTURE=r.isUsingTextureForTargets):(t.MORPHTARGETS_UV=!1,t.MORPHTARGETS_TANGENT=!1,t.MORPHTARGETS_NORMAL=!1,t.MORPHTARGETS=!1,t.NUM_MORPH_INFLUENCERS=0)}function W(e,t){let r=e.bakedVertexAnimationManager;t.BAKED_VERTEX_ANIMATION_TEXTURE=!!(r&&r.isEnabled)}function De(e,t,r,a,n=!1,i=!0,o=!0){if(!t._areAttributesDirty&&t._needNormals===t._normals&&t._needUVs===t._uvs)return!1;t._normals=t._needNormals,t._uvs=t._needUVs,t.NORMAL=t._needNormals&&e.isVerticesDataPresent("normal"),t._needNormals&&e.isVerticesDataPresent("tangent")&&(t.TANGENT=!0);for(let l=1;l<=6;++l)t["UV"+l]=t._needUVs?e.isVerticesDataPresent(`uv${l===1?"":l}`):!1;if(r){let l=e.useVertexColors&&e.isVerticesDataPresent("color");t.VERTEXCOLOR=l,t.VERTEXALPHA=e.hasVertexAlpha&&l&&i}return e.isVerticesDataPresent("instanceColor")&&(e.hasInstances||e.hasThinInstances)&&(t.INSTANCESCOLOR=!0),a&&v(e,t),n&&H(e,t),o&&W(e,t),!0}function he(e,t){if(e.activeCamera){let r=t.MULTIVIEW;t.MULTIVIEW=e.activeCamera.outputRenderTarget!==null&&e.activeCamera.outputRenderTarget.getViewCount()>1,t.MULTIVIEW!=r&&t.markAsUnprocessed()}}function Ue(e,t,r){let a=t.ORDER_INDEPENDENT_TRANSPARENCY,n=t.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;t.ORDER_INDEPENDENT_TRANSPARENCY=e.useOrderIndependentTransparency&&r,t.ORDER_INDEPENDENT_TRANSPARENCY_16BITS=!e.getEngine().getCaps().textureFloatLinearFiltering,(a!==t.ORDER_INDEPENDENT_TRANSPARENCY||n!==t.ORDER_INDEPENDENT_TRANSPARENCY_16BITS)&&t.markAsUnprocessed()}function Ve(e,t,r){let a=t.PREPASS;if(!t._arePrePassDirty)return;let n=[{type:1,define:"PREPASS_POSITION",index:"PREPASS_POSITION_INDEX"},{type:2,define:"PREPASS_VELOCITY",index:"PREPASS_VELOCITY_INDEX"},{type:3,define:"PREPASS_REFLECTIVITY",index:"PREPASS_REFLECTIVITY_INDEX"},{type:0,define:"PREPASS_IRRADIANCE",index:"PREPASS_IRRADIANCE_INDEX"},{type:7,define:"PREPASS_ALBEDO_SQRT",index:"PREPASS_ALBEDO_SQRT_INDEX"},{type:5,define:"PREPASS_DEPTH",index:"PREPASS_DEPTH_INDEX"},{type:6,define:"PREPASS_NORMAL",index:"PREPASS_NORMAL_INDEX"}];if(e.prePassRenderer&&e.prePassRenderer.enabled&&r){t.PREPASS=!0,t.SCENE_MRT_COUNT=e.prePassRenderer.mrtCount,t.PREPASS_NORMAL_WORLDSPACE=e.prePassRenderer.generateNormalsInWorldSpace;for(let i=0;i<n.length;i++){let o=e.prePassRenderer.getIndex(n[i].type);o!==-1?(t[n[i].define]=!0,t[n[i].index]=o):t[n[i].define]=!1}}else{t.PREPASS=!1;for(let i=0;i<n.length;i++)t[n[i].define]=!1}t.PREPASS!=a&&(t.markAsUnprocessed(),t.markAsImageProcessingDirty())}function G(e,t){let r=!1;if(e.activeCamera){let a=t.CAMERA_ORTHOGRAPHIC?1:0,n=t.CAMERA_PERSPECTIVE?1:0,i=e.activeCamera.mode===1?1:0,o=e.activeCamera.mode===0?1:0;(a^i||n^o)&&(t.CAMERA_ORTHOGRAPHIC=i===1,t.CAMERA_PERSPECTIVE=o===1,r=!0)}return r}function k(e,t,r,a,n=null,i=!1){n&&n.push("Light"+e),!i&&(t.push("vLightData"+e,"vLightDiffuse"+e,"vLightSpecular"+e,"vLightDirection"+e,"vLightFalloff"+e,"vLightGround"+e,"lightMatrix"+e,"shadowsInfo"+e,"depthValues"+e),r.push("shadowTexture"+e),r.push("depthTexture"+e),t.push("viewFrustumZ"+e,"cascadeBlendFactor"+e,"lightSizeUVCorrection"+e,"depthCorrection"+e,"penumbraDarkness"+e,"frustumLengths"+e),a&&(r.push("projectionLightTexture"+e),t.push("textureProjectionMatrix"+e)))}function be(e,t,r,a=4){let n,i=null;if(e.uniformsNames){let o=e;n=o.uniformsNames,i=o.uniformBuffersNames,t=o.samplers,r=o.defines,a=o.maxSimultaneousLights||0}else n=e,t||(t=[]);for(let o=0;o<a&&r["LIGHT"+o];o++)k(o,n,t,r["PROJECTEDLIGHTTEXTURE"+o],i);r.NUM_MORPH_INFLUENCERS&&(n.push("morphTargetInfluences"),n.push("morphTargetCount")),r.BAKED_VERTEX_ANIMATION_TEXTURE&&(n.push("bakedVertexAnimationSettings"),n.push("bakedVertexAnimationTextureSizeInverted"),n.push("bakedVertexAnimationTime"),t.push("bakedVertexAnimationTexture"))}var w="bonesDeclaration",X=`#if NUM_BONE_INFLUENCERS>0
attribute vec4 matricesIndices;attribute vec4 matricesWeights;
#if NUM_BONE_INFLUENCERS>4
attribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
uniform highp sampler2D boneSampler;uniform float boneTextureWidth;
#else
uniform mat4 mBones[BonesPerMesh];
#endif
#ifdef BONES_VELOCITY_ENABLED
uniform mat4 mPreviousBones[BonesPerMesh];
#endif
#ifdef BONETEXTURE
#define inline
mat4 readMatrixFromRawSampler(sampler2D smp,float index)
{float offset=index *4.0;float dx=1.0/boneTextureWidth;vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),0.));vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),0.));vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),0.));vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),0.));return mat4(m0,m1,m2,m3);}
#endif
#endif
#endif
`;u.IncludesShadersStore[w]=X;var Y="bakedVertexAnimationDeclaration",y=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform float bakedVertexAnimationTime;uniform vec2 bakedVertexAnimationTextureSizeInverted;uniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTexture;
#ifdef INSTANCES
attribute vec4 bakedVertexAnimationSettingsInstanced;
#endif
#define inline
mat4 readMatrixFromRawSamplerVAT(sampler2D smp,float index,float frame)
{float offset=index*4.0;float frameUV=(frame+0.5)*bakedVertexAnimationTextureSizeInverted.y;float dx=bakedVertexAnimationTextureSizeInverted.x;vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),frameUV));vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),frameUV));vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),frameUV));vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),frameUV));return mat4(m0,m1,m2,m3);}
#endif
`;u.IncludesShadersStore[Y]=y;var z="morphTargetsVertexGlobalDeclaration",K=`#ifdef MORPHTARGETS
uniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];
#ifdef MORPHTARGETS_TEXTURE 
uniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector3FromRawSampler(int targetIndex,float vertexIndex)
{ 
float y=floor(vertexIndex/morphTargetTextureInfo.y);float x=vertexIndex-y*morphTargetTextureInfo.y;vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);return texture(morphTargets,textureUV).xyz;}
#endif
#endif
`;u.IncludesShadersStore[z]=K;var q="morphTargetsVertexDeclaration",Q=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
attribute vec3 position{X};
#ifdef MORPHTARGETS_NORMAL
attribute vec3 normal{X};
#endif
#ifdef MORPHTARGETS_TANGENT
attribute vec3 tangent{X};
#endif
#ifdef MORPHTARGETS_UV
attribute vec2 uv_{X};
#endif
#elif {X}==0
uniform int morphTargetCount;
#endif
#endif
`;u.IncludesShadersStore[q]=Q;var Z="morphTargetsVertexGlobal",j=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
float vertexID;
#endif
#endif
`;u.IncludesShadersStore[Z]=j;var J="morphTargetsVertex",$=`#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
#if {X}==0
for (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (i>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;positionUpdated+=(readVector3FromRawSampler(i,vertexID)-position)*morphTargetInfluences[i];vertexID+=1.0;
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(readVector3FromRawSampler(i,vertexID) -normal)*morphTargetInfluences[i];vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(readVector3FromRawSampler(i,vertexID).xy-uv)*morphTargetInfluences[i];vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(readVector3FromRawSampler(i,vertexID) -tangent.xyz)*morphTargetInfluences[i];
#endif
}
#endif
#else
positionUpdated+=(position{X}-position)*morphTargetInfluences[{X}];
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(normal{X}-normal)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(tangent{X}-tangent.xyz)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(uv_{X}-uv)*morphTargetInfluences[{X}];
#endif
#endif
#endif
`;u.IncludesShadersStore[J]=$;var ee="bonesVertex",te=`#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
mat4 influence;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];
#endif
#else
influence=mBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=mBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=mBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=mBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;u.IncludesShadersStore[ee]=te;var re="bakedVertexAnimation",ae=`#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
#define BVASNAME bakedVertexAnimationSettingsInstanced
#else
#define BVASNAME bakedVertexAnimationSettings
#endif
float VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME.z;float VATSpeed=BVASNAME.w;float totalFrames=VATEndFrame-VATStartFrame+1.0;float time=bakedVertexAnimationTime*VATSpeed/totalFrames;float frameCorrection=time<1.0 ? 0.0 : 1.0;float numOfFrames=totalFrames-frameCorrection;float VATFrameNum=fract(time)*numOfFrames;VATFrameNum=mod(VATFrameNum+VATOffsetFrame,numOfFrames);VATFrameNum=floor(VATFrameNum);VATFrameNum+=VATStartFrame+frameCorrection;mat4 VATInfluence;VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[0],VATFrameNum)*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[1],VATFrameNum)*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[2],VATFrameNum)*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[3],VATFrameNum)*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[0],VATFrameNum)*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[1],VATFrameNum)*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[2],VATFrameNum)*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[3],VATFrameNum)*matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;}
#endif
`;u.IncludesShadersStore[re]=ae;var ne="gpuTransformVertexShader",ie=`attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
out vec3 outPosition;const mat4 identity=mat4(
vec4(1.0,0.0,0.0,0.0),
vec4(0.0,1.0,0.0,0.0),
vec4(0.0,0.0,1.0,0.0),
vec4(0.0,0.0,0.0,1.0)
);void main(void) {vec3 positionUpdated=position;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
mat4 finalWorld=identity;
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);outPosition=worldPos.xyz;}`;u.ShadersStore[ne]=ie;var oe="gpuTransformPixelShader",se=`#version 300 es
void main() {discard;}
`;u.ShadersStore[oe]=se;var g=class{constructor(t){this._buffers={},this._effects={},this._engine=t}processAsync(t){Array.isArray(t)||(t=[t]);let r=[];for(let a=0;a<t.length;++a){let n=t[a];if(n.getTotalVertices()===0||!n.getVertexBuffer||!n.getVertexBuffer(c.PositionKind))continue;let o,l=0,E=[],s=[],T=[c.PositionKind],p=[];if(n&&n.useBones&&n.computeBonesUsingShaders&&n.skeleton){T.push(c.MatricesIndicesKind),T.push(c.MatricesWeightsKind),n.numBoneInfluencers>4&&(T.push(c.MatricesIndicesExtraKind),T.push(c.MatricesWeightsExtraKind));let f=n.skeleton;E.push("#define NUM_BONE_INFLUENCERS "+n.numBoneInfluencers),f.isUsingTextureForMatrices?(E.push("#define BONETEXTURE"),s.indexOf("boneTextureWidth")===-1&&s.push("boneTextureWidth"),p.indexOf("boneSampler")===-1&&p.push("boneSampler")):(E.push("#define BonesPerMesh "+(f.bones.length+1)),s.indexOf("mBones")===-1&&s.push("mBones"))}else E.push("#define NUM_BONE_INFLUENCERS 0");let A=n?n.morphTargetManager:null;if(A){l=A.numMaxInfluencers||A.numInfluencers,l>0&&E.push("#define MORPHTARGETS"),A.isUsingTextureForTargets&&(E.push("#define MORPHTARGETS_TEXTURE"),s.indexOf("morphTargetTextureIndices")===-1&&s.push("morphTargetTextureIndices"),p.indexOf("morphTargets")===-1&&p.push("morphTargets")),E.push("#define NUM_MORPH_INFLUENCERS "+l);for(let f=0;f<l;f++)T.push(c.PositionKind+f);l>0&&(s=s.slice(),s.push("morphTargetInfluences"),s.push("morphTargetCount"),s.push("morphTargetTextureInfo"),s.push("morphTargetTextureIndices"))}let d=n.bakedVertexAnimationManager;d&&d.isEnabled&&(E.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"),s.indexOf("bakedVertexAnimationSettings")===-1&&s.push("bakedVertexAnimationSettings"),s.indexOf("bakedVertexAnimationTextureSizeInverted")===-1&&s.push("bakedVertexAnimationTextureSizeInverted"),s.indexOf("bakedVertexAnimationTime")===-1&&s.push("bakedVertexAnimationTime"),p.indexOf("bakedVertexAnimationTexture")===-1&&p.push("bakedVertexAnimationTexture"),C(T,n,E));let N=E.join(`
`);if(this._effects[N])o=this._effects[N];else{let f={attributes:T,uniformsNames:s,uniformBuffersNames:[],samplers:p,defines:N,fallbacks:null,onCompiled:null,onError:null,indexParameters:{maxSimultaneousMorphTargets:l},maxSimultaneousLights:0,transformFeedbackVaryings:["outPosition"]};o=this._engine.createEffect("gpuTransform",f,this._engine),this._effects[N]=o}r.push(new Promise(f=>{if(o.isReady()){this._compute(n,o),f();return}o.onCompileObservable.addOnce(()=>{this._compute(n,o),f()})}))}return Promise.all(r).then(()=>{})}_compute(t,r){let a=this._engine,n,i=t.getTotalVertices();if(this._buffers[t.uniqueId])n=this._buffers[t.uniqueId];else{let s=new Float32Array(i*3);n=new x(t.getEngine(),s,!0,3),this._buffers[t.uniqueId]=n}r.getEngine().enableEffect(r),t._bindDirect(r,null,!0),F(t,r);let o=t.morphTargetManager;o&&o.numInfluencers>0&&L(t,r);let l=t.bakedVertexAnimationManager;l&&l.isEnabled&&t.bakedVertexAnimationManager?.bind(r,!1);let E=n.getData();a.bindTransformFeedbackBuffer(n.getBuffer()),a.setRasterizerState(!1),a.beginTransformFeedback(!0),a.drawArraysType(2,0,i),a.endTransformFeedback(),a.setRasterizerState(!0),a.readTransformFeedbackBuffer(E),a.bindTransformFeedbackBuffer(null),t._refreshBoundingInfo(E,null)}dispose(){for(let t in this._buffers)this._buffers[t].dispose();this._buffers={},this._effects={},this._engine=null}};export{m as a,Ee as b,ue as c,fe as d,Ne as e,Pe as f,Ie as g,D as h,h as i,L as j,de as k,Re as l,xe as m,C as n,F as o,V as p,_e as q,Oe as r,Me as s,Le as t,b as u,Ce as v,Fe as w,B as x,ge as y,v as z,H as A,De as B,he as C,Ue as D,Ve as E,G as F,k as G,be as H,g as I};
