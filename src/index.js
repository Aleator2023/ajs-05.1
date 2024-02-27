class Character {
    constructor(name, type, health = 100, level = 1, attack, defence) {
      this.name = name;
      this.type = type;
      this.health = health;
      this.level = level;
      this.attack = attack;
      this.defence = defence;
    }
  
    levelUp() {
      if (this.health === 0) {
        throw new Error("Cannot level up a dead character");
      }
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  
    damage(points) {
      if (this.health === 0) {
        return;
      }
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
  
  module.exports = Character;