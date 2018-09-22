//describe your code
 describe("calculateInsurancePerCountry", function() {
    //what it should do
    it("should Return € 150.- for 50hp, 50years and 'Austria'", function() {
        //expect something
        expect(calculateInsurancePerCountry(50, 50,'Austria'))
            .toEqual(150);
    });
        it("should Return € 250.- for 100hp, 50years and 'Austria'", function() {
        //expect something
        expect(calculateInsurancePerCountry(100, 50,'Austria'))
            .toEqual(250);
    });
            it("should Return € 550.- for 100hp, 20years and 'Austria'", function() {
        //expect something
        expect(calculateInsurancePerCountry(100, 20,'Austria'))
            .toEqual(550);
    });
    //what it should do
    it("should Return € 220.- for 50hp, 50years and 'Hungary'", function() {
        //expect something
        expect(calculateInsurancePerCountry(50, 50,'Hungary'))
            .toEqual(220);
    });
    //what it should do
    it("should Return € 340.- for 100hp, 50years and 'Hungary'", function() {
        //expect something
        expect(calculateInsurancePerCountry(100, 50,'Hungary'))
            .toEqual(340);
    });
    //what it should do
    it("should Return € 700.- for 100hp, 20years and 'Hungary'", function() {
        //expect something
        expect(calculateInsurancePerCountry(100, 20,'Hungary'))
            .toEqual(700);
    });
    //what it should do
    it("should Return ~€ 291.51 for 50hp, 50years and 'Greece'", function() {
        //expect something
        expect(calculateInsurancePerCountry(50, 50,'Greece'))
            .toBeCloseTo(291.51);
    });
    it("should Return ~€ 433.02 for 100hp, 50years and 'Greece'", function() {
        //expect something
        expect(calculateInsurancePerCountry(100, 50,'Greece'))
            .toBeCloseTo(433.02);
    });
    it("should Return ~€ 802.17 for 100hp, 20years and 'Greece'", function() {
        //expect something
        expect(calculateInsurancePerCountry(100, 20,'Greece'))
            .toBeCloseTo(802.17);
    });
    //what it should do
    it("should Return false for 50hp, 50years and 'Austrian'", function() {
        //expect something
        expect(calculateInsurancePerCountry(50, 50,'Austrian'))
            .toEqual(false);
    });
        it("should Return false for 100hp, 50years and 'Italy'", function() {
        //expect something
        expect(calculateInsurancePerCountry(100, 50,'Italy'))
            .toEqual(false);
    });
        it("should Return false for 100hp, 20years and 'Germany'", function() {
        //expect something
        expect(calculateInsurancePerCountry(100, 20,'Germany'))
            .toEqual(false);
    });
});