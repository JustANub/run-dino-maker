function configGround() {
  const ground = new GameObject('ground', [
    '/assets/ground/ground-1.png',
    '/assets/ground/ground-2.png',
    '/assets/ground/ground-3.png',
    '/assets/ground/ground-4.png',
  ], 1);

  globalThis.ground = ground;
}

