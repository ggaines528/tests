import { hello } from '../utils/helloworld';

it("Should say Hello there!", ()=> {
    const hello = hello();

    expect(hello).toBe("Hello there!");
});