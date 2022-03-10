const LUNAR = artifacts.require("LUNARToken");

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(LUNAR);
}