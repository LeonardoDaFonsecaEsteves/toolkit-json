import { JsonCircularStringify } from "../src";

describe('JsonCircularStringify', () => {
    it('should empty args', () => {
        const testEmpty = JsonCircularStringify()
        expect(testEmpty).toEqual("[]")
    });
    it('sloud single args', () => {
        const testSingleArgs = JsonCircularStringify('test')
        expect(testSingleArgs).toEqual("[\"test\"]")
    })
    it('sloud multilpe args', () => {
        const testMultilpeArgs = JsonCircularStringify(
            'test',
            ['test1', { id: 1, str: 'test2' }],
            { id: 2, str: "test3", opt: ['test4'] }
        )
        expect(testMultilpeArgs).toEqual("[\"test\",[\"test1\",{\"id\":1,\"str\":\"test2\"}],{\"id\":2,\"str\":\"test3\",\"opt\":[\"test4\"]}]")
    })
});