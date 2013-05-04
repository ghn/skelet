define([
    "modules/friends"
], function(Friends) {

    describe("Friends", function() {

        /**
         * Collection empty at start
         */
        it("List empty at start", function() {
            expect(Friends.length).toEqual(0);
        });

        /**
         * Save success?
         */
        it("Save successful?", function() {
            Friends.add({
                name : 'Dean',
                first_name : 'James'
            });
            expect(Friends.length).toEqual(1);
        });
    });
});
