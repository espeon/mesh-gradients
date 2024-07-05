varying vec3 v_color;

// fake noise
float perlinNoise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  vec3 color = v_color;
  if (u_darken_top == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
  }
  // Apply Perlin noise overlay
  vec2 st = gl_FragCoord.xy/resolution.xy;
  float noise = perlinNoise(st * 1.0); // Adjust the '1.0' for noise scale
  color *= (0.8 + noise * 0.3); // luminance + noise * intensity

  gl_FragColor = vec4(color, 1.0);
}