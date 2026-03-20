// Central gameplay tuning file.
// Adjust values here without touching core game code.
window.GAME_CONFIG = {
  worldSize: 3200,
  playerSize: 30,
  playerCollisionRadius: 20,
  playerSpeed: 10,

  autoFireRange: 380,
  aimRange: 800,
  fireRate: 130,
  reloadTime: 2000,
  maxAmmo: 30,

  bulletSpeed: 22,
  bulletRadius: 6,
  bulletLife: 70,

  // Pickups
  pickupRespawnMs: 6500,
  pickupMagnetRadius: 120,   // px — pickup starts drifting toward player within this distance
  pickupMagnetSpeed: 4,      // px/frame — max drift speed (scales up as pickup gets closer)
  speedBoostMultiplier: 1.7,
  speedBoostDuration: 10500,
  shieldDuration: 10500,
  shieldDamageMultiplier: 0.55,
  healthPickupAmount: 28,

  // Dash ability
  dashDistance: 200,     // world-px teleported per dash
  dashCooldownMs: 4000,  // ms before dash is available again

  // Procedural map
  mapSeed: null,         // null = new random seed every round; set a number to replay a specific map
  obstacleCount: 14,     // how many obstacle pieces to generate (more = busier map)
  obstacleMinSize: 70,   // smallest obstacle side in world-px
  obstacleMaxSize: 300,  // largest obstacle side in world-px

  // Bombs
  bombSpawnIntervalMs: 5600,
  bombDamage: 8,
  bombMinRadius: 280,
  bombRadiusVariance: 100,
  bombMinExplosionSpeed: 300,
  bombExplosionSpeedVariance: 160,
  bombFuseMinSec: 0.75,
  bombFuseVarianceSec: 0.55,
  bombMoveSpeedMin: 420,
  bombMoveSpeedVariance: 160,
  bombHomingTurnRate: 2.4,
  bombMaxSeekMs: 900
};