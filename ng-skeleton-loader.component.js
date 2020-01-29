'use strict';

angular.module('skeletonLoaderModule', []).
    component('skeletonLoader', {
        bindings: {
            type: '=',
            size: '=?',
            columns: '=?',
            rows: '=?',
            fields: '=?',
            largeText:'=?'
        },
        controllerAs: 'skCtrl',
        controller: function ($scope, $element) {
            let self = this;
            self.$onInit = function () {
                // Load default values             
                // self.size = self.size || 's';
                self.type = self.type || 'form';
                self.columns = self.columns || 1;
                self.fields = self.fields || 1;
                self.rows = (self.columns * self.rows) || (self.columns * 2);
                self.largeText = (self.largeText === 'true') || false;
                self.createElement();
            }

            self.createElement = function(){
                let main = document.createDocumentFragment();
                let container = document.createElement('div');
                container.classList.add('skeleton');                
                container.classList.add(self.type);
                self.evalType(container);           
                self.evalColums(container);    
                main.appendChild(container);
                $element[0].appendChild(main);
            }

            self.evalType = (container) => {
                switch (self.type) {
                    case 'form':                        
                        createFormItems(container);
                        break;                
                    default:
                        createGridItems(container);
                        break;
                }
            }
            
            self.evalColums = (container) => {
                container.setAttribute('style','grid-template-columns: repeat(' + self.columns + ',1fr) !important;');
            }

            function createFormItems(container){
                for (let index = 0; index < self.fields; index++) {
                    let elementContainer = document.createElement('div');
                    elementContainer.classList.add('sk-group');
                    let label = document.createElement('div');
                    label.classList.add('sk-base');
                    label.classList.add('sk-label');
                    let input = document.createElement('div');
                    input.classList.add('sk-base');
                    input.classList.add(self.largeText === true && index === 0 ? 'sk-big-input' : 'sk-input');
                    elementContainer.appendChild(label);
                    elementContainer.appendChild(input);
                    container.appendChild(elementContainer);
                }
            }

            function createGridItems(container) {
                return true;
            }
        }
    });