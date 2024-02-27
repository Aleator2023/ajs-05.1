const Character = require('../src/index.js');
describe('Character', () => {
    let character;
  
    beforeEach(() => {
      character = new Character('Alex', 'Swordsman', 100, 1, 10, 10);
    });
  
    test('should level up', () => {
      character.levelUp();
      expect(character.level).toBe(2);
      expect(character.attack).toBeCloseTo(12);
      expect(character.defence).toBeCloseTo(12);
      expect(character.health).toBe(100);
    });
  
    test('should not level up if dead', () => {
      character.health = 0;
      expect(() => character.levelUp()).toThrow('Cannot level up a dead character');
    });
  
    test('should take damage', () => {
      character.damage(10);
      expect(character.health).toBeCloseTo(91);
    });
  
    test('should not have negative health', () => {
      character.damage(500);
      expect(character.health).toBe(0);
    });
  });
  