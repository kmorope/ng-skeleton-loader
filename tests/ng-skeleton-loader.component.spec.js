require('angular');
require('angular-mocks');

describe('skeletonLoader', function () {

    // Load the module that contains the `skeletonLoader` component before each test
    beforeEach(angular.module('skeletonLoaderModule'));

    // Test the controller
    describe('Controller', function () {

        it('should create a default `skeleton` component with 6 columns', inject(function ($componentController) {
            let ctrl = $componentController('skeletonLoader');

            expect(ctrl.columns).toBe(6);
        }));

    });

});