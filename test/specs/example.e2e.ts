import {performancetotal} from "wdio-performancetotal-service";

describe('suite-1', () => {
    for (let i = 0; i < 3; i++) {

        it(`Test GH vs. SF: Run ${i + 1}`, async () => {
            console.log("Test started");

            await browser.url("//t.me");
            
            performancetotal.sampleStart("GH-Startup");
            
            await browser.url("https://github.com/");
            
            performancetotal.sampleEnd("GH-Startup");

            performancetotal.sampleStart("SF-Startup");
            
            await browser.url("https://sourceforge.net/");
            
            performancetotal.sampleEnd("SF-Startup");
            
            console.log("Test ended");
        });
    }
});

