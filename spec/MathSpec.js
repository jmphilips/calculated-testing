describe("The basic specifications for Math", function(){

	it("should have an add function", function(){
		expect(add).toBeDefined();
	});

	it("should add two integers", function() {
		expect(add(2, 5)).toBe(7)
	});


	it("should have a subtract function", function(){
		expect(subtract).toBeDefined();
	});

	it("should subtract one integer from another", function(){
		expect(subtract(5, 2)).toBe(3);
	});


	it("should have a multiply function", function() {
		expect(multiply).toBeDefined();
	});

	it("should multiply two numbers", function() {
		expect(multiply(2, 5)).toBe(10);
	})

	it("should have a divide function", function() {
		expect(divide).toBeDefined();
	});

	it("should divide one number by another number", function() {
		expect(divide(10, 2)).toBe(5)
	});

	it("should square a number", function() {
		expect(square).toBeDefined();
	});

	it("should square a number", function() {
		expect(square(2).toBe(4));
	});

	it("should have a square root function", function() {
		expect(sqRoot).toBeDefined();
	});

	it("should return the square root of a number", function() {
		expect(sqRoot(4)).toBe(2);
	})


});