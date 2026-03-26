import{V as e}from"./index-C6che2Xh.js";const s={uniforms:{tDiffuse:{value:null},uOffset:{value:.12},uCenter:{value:new e(.5,.5)},uRadius:{value:.01},uSoftness:{value:.1},uResolution:{value:new e(1,1)}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uOffset;
        uniform vec2 uCenter;
        uniform float uRadius;
        uniform float uSoftness;
        uniform vec2 uResolution;
        varying vec2 vUv;

        void main() {
            // 1. Correct Aspect Ratio (prevents oval shapes on landscape screens)
            float aspect = uResolution.x / uResolution.y;
            vec2 correctUv = vUv * vec2(aspect, 1.0);
            vec2 correctCenter = uCenter * vec2(aspect, 1.0);

            // 2. Calculate Distance and Mask
            float dist = length(correctUv - correctCenter);
            
            // smoothstep returns 0 inside radius, 1 outside radius+softness.
            // Inverting (1.0 - ...) gives 1 inside (full effect), 0 outside (no effect).
            float spatialMask = 1.0 - smoothstep(uRadius, uRadius + uSoftness, dist);
            
            // 3. Scale shift by mask and screen resolution
            vec2 shift = spatialMask * uOffset * (vUv - uCenter);

            // 4. Sample and Apply
            vec4 cg = texture2D(tDiffuse, vUv); // Green center
            
            // Apply only to Red and Blue, mask ensures effect dies outside the circle
            vec4 cr = texture2D(tDiffuse, vUv + shift);
            vec4 cb = texture2D(tDiffuse, vUv - shift);

            gl_FragColor = vec4(cr.r, cg.g, cb.b, cg.a);
        }
    `};export{s as LocalizedChromaticShader};
//# sourceMappingURL=LocalizedChromaticShader-Ds_0AmZ4.js.map
