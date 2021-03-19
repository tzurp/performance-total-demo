import {performancetotal} from "wdio-performancetotal-service";

describe('suite-1', () => {
    for (let i = 0; i < 3; i++) {

        it(`Test GH vs. SF: Run ${i + 1}`, () => {
            console.log("Test started");

            browser.url("//t.me");
            
            performancetotal.sampleStart("GH-Startup");
            
            browser.url("https://github.com/");
            
            performancetotal.sampleEnd("GH-Startup");

            performancetotal.sampleStart("SF-Startup");
            
            browser.url("https://sourceforge.net/");
            
            performancetotal.sampleEnd("SF-Startup");
            
            console.log("Test ended");
        });
    }
});

