const e={uniforms:{tDiffuse:{value:null},uOffset:{value:0},uDirection:{value:{x:1,y:1}}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uOffset;
        uniform vec2 uDirection;
        varying vec2 vUv;

        void main() {
            // Calculate the directional offset
            vec2 shift = uDirection * uOffset;

            // Sample the texture 3 times with different offsets
            vec4 cr = texture2D(tDiffuse, vUv + shift);       // Red shifted positively
            vec4 cg = texture2D(tDiffuse, vUv);               // Green dead center
            vec4 cb = texture2D(tDiffuse, vUv - shift);       // Blue shifted negatively

            // Combine them back into a single color
            gl_FragColor = vec4(cr.r, cg.g, cb.b, cg.a);
        }
    `};export{e as ChromaticAberrationShader};
//# sourceMappingURL=ChromaticAberrationShader-BNhHE_Ia.js.map
