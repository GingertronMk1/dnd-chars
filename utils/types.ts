type Statistic = {
  value: Number,
  modifier: Number
}

type Character = {
  name: string,
  class: string,
  subclass: string,
  stats: {
    intelligence: Statistic,
    wisdom: Statistic,
    charisma: Statistic,
    strength: Statistic,
    dexterity: Statistic,
    constitution: Statistic
  }
}