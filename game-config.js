// Central gameplay tuning file.
// Adjust values here without touching core game code.
window.GAME_CONFIG = {
  worldSize: 3200,
  playerSize: 30,
  playerCollisionRadius: 20,
  playerSpeed: 5,

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
  speedBoostMultiplier: 1.7,
  speedBoostDuration: 3500,
  shieldDuration: 4200,
  shieldDamageMultiplier: 0.55,
  healthPickupAmount: 28,

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
