export const NZ_BOUNDS = [
  [-46.641235447, 166.509144322],
  [-34.4506617165, 178.517093541],
];

export const NZ_CENTER_POSITION = NZ_BOUNDS.reduce((prev, cur) =>
  prev.map((val, idx) => (val + cur[idx]) / 2),
);
