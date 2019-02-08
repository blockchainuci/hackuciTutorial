var Migrations = artifacts.require("./Migrations.sol");
var Counter = artifacts.require("./Counter.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Counter);
};
