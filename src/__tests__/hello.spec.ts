import { greet } from "../hello";

describe('Hello', () => {

    describe('greet', () => {

        it("Should return 'hello'", () => {
            expect(greet()).toBe("hello");
        });

    });

});
