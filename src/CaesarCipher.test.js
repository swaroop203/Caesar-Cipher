import CaesarCipher, {caesarShift} from "./CaesarCipher"

describe ("CaesarCipher",() => {
    let result;

    it("CaesarCipher have been called with params", ()=> {
        result = CaesarCipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", 23);
        let expectedHtml = <p>QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD</p>;
        expect(result).toEqual(expectedHtml);
    });
    it("caesarShift have been called with provided -ve numbers", ()=> {
        result = caesarShift("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG",-3);
        expect(result).toBe("QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD");
    });

    it("caesarShift have been called with provided params", ()=> {
        result = caesarShift("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG",23);
        expect(result).toBe("QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD");
    });

    it("caesarShift have been called with provided empty String", ()=> {
        result = caesarShift("",-3);
        expect(result).toBe("");
    });
    it("caesarShift have been called with provided only string", ()=> {
        result = caesarShift("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG");
        expect(result).not.toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG");
    });
    it("caesarShift have been called with provided and should return same string on shift 0", ()=> {
        result = caesarShift("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG",0);
        expect(result).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG");
    });
});
