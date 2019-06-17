const HashMap = require('./hashmap')

function main() {
  const lotr = new HashMap()
  HashMap.MAX_LOAD_RATIO = 0.5
  HashMap.SIZE_RATIO = 3

  lotr.set('hobbit', 'bilbo')
  lotr.set('hobbit', 'frodo')
  lotr.set('wizard', 'gandolf')
  lotr.set('human', 'aragon')
  lotr.set('elf', 'legolas')
  lotr.set('maiar', 'the necromancer')
  lotr.set('maiar', 'sauron')
  lotr.set('ringbearer', 'gollum')
  lotr.set('ladyoflight', 'galadriel')
  lotr.set('halfelven', 'arwen')
  lotr.set('ent', 'treebeard')

  // console.log(lotr);

  console.log(lotr.get('maiar'))
  console.log(lotr.get('hobbit'))
}

main()

// 1. yes
// sauron, frodo
// there is only one value returned for each of the keys.
// capacity is 24 because our max load ratio was exceeded and a resize was triggered.