export type Placement = {
  x: number;
  y: number;
  z: number;
};

export function createPlacement(x = 0, y = 0, z = 0): Placement {
  return { x, y, z };
}
