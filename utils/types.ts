type Statistic = {
  value: number,
  modifier: number,
  displayModifier: string
}

type Statistics = {
  [index: string]: Statistic
}

type Character = {
  name: string,
  class: string,
  subclass: string,
  stats: Statistics,
  proficiencies: {
    [index: string]: boolean
  }
}