

const { me } = require ("./information");
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${me.name} from the ${me.campus}`,
    e : "^^",
    T : "p "
}));