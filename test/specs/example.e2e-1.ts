import {performancetotal} from "wdio-performancetotal-service";
import { cleanuptotal } from "wdio-cleanuptotal-service";

describe('suite-1', () => {
    for (let i = 0; i < 3; i++) {
        it(`Test1 GH vs. SF: Run ${i + 1}`, async () => {
            console.log("Test started");

            await browser.url("https://web.telegram.org/");
            
            performancetotal.sampleStart("GH-Startup");

            cleanuptotal.addCleanup(()=> {console.log("Cleanup 1 - error"); throw new Error("Cleanup 1 - error")});
            
            await browser.url("https://github.com/");
            
            performancetotal.sampleEnd("GH-Startup");

            performancetotal.sampleStart("SF-Startup");

            cleanuptotal.addCleanup(()=> console.log("Cleanup 2"));
            
            await browser.url("https://sourceforge.net/");
            
            performancetotal.sampleEnd("SF-Startup");
            
            console.log("Test ended");
        });
    }
});

