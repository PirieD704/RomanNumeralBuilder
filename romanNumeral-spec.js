describe("Roman Numeral Testing", function(){
	// it("Should be a string I", function(){
	// 	expect(romanize(1)).toBe("I");
	// })

	it("should be a string M", function(){
		expect(romanize(1000)).toBe("M");
	})

	it("should be a string MIV", function(){
		expect(romanize(1004)).toBe("MIV");
	})

	it("should be a string DCCCXLVII", function(){
		expect(romanize(847)).toBe("DCCCXLVII");
	})

});




