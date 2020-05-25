const { passwordIsOkay } = require("../src/password_checker.js");

describe("password", function () {
    it("should exist, be longer than 8 characters and meet at least one of the other conditions", function () {
        expect(passwordIsOkay("W!lson2020")).toBe(true);
    })
})