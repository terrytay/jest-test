import { Utils } from "../app/Utils";

// Can append .skip or .only to describe/test to modify what's tested

describe("Utils test suite", () => {
	// beforeEach(() => {
	// 	console.log("Before each");
	// });

	// beforeAll(() => {
	// 	console.log("Before all");
	// });

	test("First test", () => {
		const result = Utils.toUpperCase("abc");
		expect(result).toBe("ABC");
	});

	test("Parse simple URL", () => {
		const url = "http://localhost:8080/login";

		const parsedUrl = Utils.parseUrl(url);
		expect(parsedUrl.href).toBe(url);
		expect(parsedUrl.port).toBe("8080");
		expect(parsedUrl.protocol).toBe("http:");
		expect(parsedUrl.query).toEqual({});
	});

	test("Parse URL with query", () => {
		const url = "http://localhost:8080/login";
		const query = "?user=user&password=pass";
		const parsedUrl = Utils.parseUrl(url + query);

		const expectedQuery = {
			user: "user",
			password: "pass",
		};

		expect(parsedUrl.query).toEqual(expectedQuery);
		expect(expectedQuery).toBe(expectedQuery);
	});

	// test.todo("Test invalid URL");
	test("Test invalid URL", () => {
		const expectError = () => Utils.parseUrl("");

		expect(expectError).toThrowError();
	});

	test("Test invalid URL with try/catch", () => {
		try {
			Utils.parseUrl("");
		} catch (err) {
			expect(err).toBeInstanceOf(Error);
			expect(err).toHaveProperty("message", "Empty url!");
		}
	});
});
