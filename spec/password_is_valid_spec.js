const { passwordIsValid } = require("../src/password_checker.js");

describe("password", function () {
    it("should exist", function () {
        expect(function () {
            passwordIsValid("");
        }).toThrow(new Error("password should exist"));
    })

    it("should be longer than 8 characters", function () {
        expect(function () {
            passwordIsValid("W!lls0n");
        }).toThrow(new Error("password should be longer than 8 characters"));
    })
    it("should have at least one lowercase letter", function () {
        expect(function () {
            passwordIsValid("W!LLSON2020");
        }).toThrow(new Error("password should have at least one lowercase letter"))
    })
    it("should have at least one uppercase letter", function () {
        expect(function () {
            passwordIsValid("w!llson2020");
        }).toThrow(new Error("password should have at least one uppercase letter"))
    })
    it("should have at least one digit", function () {
        expect(function () {
            passwordIsValid("W!llsonTwenty");
        }).toThrow(new Error("password should have at least one digit"))
    })
    it("should have at least one special character", function () {
        expect( function () {
            passwordIsValid("Willson2020");
        }).toThrow(new Error("password should have at least one special character"))
    })
})

