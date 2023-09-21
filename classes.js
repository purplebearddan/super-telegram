// classes

class Entity {
  constructor(name, maxHP, attackPower) {
    this.name = name;
    this.maxHP = maxHP;
    this.hp = maxHP;
    this.attackPower = attackPower;
  }

  attack(entity) {
    console.log(`${this.name} attacked ${entity.name}`);
    entity.takeDamage(this);
  }

  takeDamage(from) {
    if (this.hp - from.attackPower > 0) {
      this.hp -= from.attackPower;
    } else {
      this.hp = 0;
    }
    console.log(this.name, this.hp);
  }

  greeting() {
    console.log("...");
  }
}

class Player extends Entity {
  constructor(name, maxHP, attackPower, inventory = []) {
    super(name, maxHP, attackPower);
    this.inventory = inventory;
  }

  openInventory() {
    console.log(JSON.stringify(this.inventory, null, 2));
  }

  greeting() {
    console.log("hi");
  }
}

const horace = new Player("Horace", 100, 3);
const boris = new Entity("boris", 100, 6);

console.log(horace);

for (let i = 0; i < 100; i++) {
  horace.attack(boris);
  boris.attack(horace);
}

// horace.openInventory();
