/**
 * ADD SPECS HERE!
 */
define([
    // Load specs
    "tests/unit/friend",
],

/********************************
 * DO NOT TOUCH FROM HERE !!
 *******************************/
function() {
    (function() {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var trivialReporter = new jasmine.TrivialReporter();
        jasmineEnv.addReporter(trivialReporter);

        jasmineEnv.specFilter = function(spec) {
            return trivialReporter.specFilter(spec);
        };

        var currentWindowOnload = window.onload;
        $(function() {
            if (currentWindowOnload) {
                currentWindowOnload();
            }
            execJasmine();
        });

        function execJasmine() {
            jasmineEnv.execute();
        }
    })();
});
