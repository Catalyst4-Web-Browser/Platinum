// Script to check if the script uses disallowed methods and throws error if it does.
var content;

function checkPlugin(namespace) {
    let content = fetch("../plugins/" + namespace + "/plugin.js").then(res => res.text);
    var ret = Boolean(1);
    function testCondition(condition, errcod) {
        if (condition) {
            console.err(`Could not load plugin ${namespace} because of error: ${errcod}`)
            return false;
        }
  }
      // To add a blacklisted object, add content.test(regex)
      //content.test(/[\0\s\n]process./),
      // content.test(/[\0\s\n]*eval./)
      // .forEach(function(a) {a => testCondition(a, "Contains disallowed object").then(res => ret)})
  // return ret;
}