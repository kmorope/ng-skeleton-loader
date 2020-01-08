'use strict';

angular.module('skeletonLoaderModule').
    component('skeletonLoader', {
        templateUrl:'/node_modules/ng-skeleton-loader/ng-skeleton-loader.template.html',
        bindings: {
            type: '=',
            size: '=?',
            columns: '=?',
            rows: '=?',
            fields: '=?'
        },
        controllerAs: 'skCtrl',
        controller: function () {
            let self = this;
            self.$onInit = function () {
                // Load default values             
                self.size = self.size || 's';
                self.columns = self.columns || 6;
                self.fields = self.fields || 2;
                self.rows = (self.columns * self.rows) || (self.columns * 2);
            }
            self.colClass = function () {
                switch (self.columns) {
                    case 2:
                        return 'two-col';
                    case 4:
                        return 'four-col';
                    case 6:
                        return 'six-col';
                    default:
                        return 'two-col';
                }
            }
        }
    });