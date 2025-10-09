export const GOOGLE_MAP_BASE_URL =
  "https://www.google.com/maps/d/u/0/embed?mid=1rF5337I7j7xk98at6ZPdMul4aglzrLg&hl=en&ehbc=2E312F&output=embed";

export const buildMapSrc = (lat: number, lng: number, zoom: number) =>
  `${GOOGLE_MAP_BASE_URL}&z=${zoom}&ll=${lat},${lng}`;
