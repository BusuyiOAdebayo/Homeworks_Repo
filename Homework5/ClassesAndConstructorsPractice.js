class StoreItems {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class GameConsoles extends StoreItems {
  constructor(id, name, price, level) {
    super(id, name, price);
    this.level = level;
  }
}

class VideoGames extends StoreItems {
  constructor(id, name, price, year) {
    super(id, name, price);
    this.year = year;
  }
}