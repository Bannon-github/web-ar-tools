export type CapabilityMatrix = {
  webxr: boolean;
  hitTest: boolean;
  handTracking: boolean;
};

export function detectCapabilities(): CapabilityMatrix {
  return {
    webxr: typeof navigator !== 'undefined' && 'xr' in navigator,
    hitTest: false,
    handTracking: false
  };
}
