const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];


var sortedRobots = robots.map(function(robot){
  if(knownDecepticons.includes(robot["name"])){

    var name = {name:robot["name"]}
    var alliance = {alliance:"decepticon"}

    return Object.assign({}, name, alliance)
  } else {
    var name = {name:robot["name"]}
    var alliance = {alliance:"autobot"}

    return Object.assign({}, name, alliance)
  }
})


var coloredZebraStripes = zebraStripes.map(function(object){

  if (zebraStripes.indexOf(object) % 2 == 0){
    var width = {width:object["width"]}
    var color = {color:"black"}

    return Object.assign({}, width, color)

  } else {
    var width = {width:object["width"]}
    var color = {color:"white"}

    return Object.assign({}, width, color)
  }
})
