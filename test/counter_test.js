const Counter = artifacts.require("Counter");
contract('counter_test', function(accounts) {
    let instance;

    before(async () => {
        instance = await Counter.deployed(); //deploy the contract
    });

    it("should assert true", function(done) {
        assert.isTrue(true);
        done();
    });

    it("Initial value of counter should be zero", async () => {
        let count = await instance.getCount.call({from: accounts[0]});
        assert.equal(count, 0);
    });

    it("Should increment counter", async () => {
        await instance.incrementCounter({from: accounts[0]});
        let count = await instance.getCount.call({from: accounts[0]});
        assert.equal(count, 1);
    });

    it("Should emit event on increment counter", async () => {
      let reciept = await instance.incrementCounter({from: accounts[0]});
      assert.equal(reciept.logs.length, 1);
      assert.equal(reciept.logs[0].args.count, 2);
    });
});
