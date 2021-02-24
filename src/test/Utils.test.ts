import { Utils } from "../app/Utils";

describe("Utils test suite", () => {
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
});
