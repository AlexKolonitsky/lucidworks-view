(function() {
  'use strict';

  angular
    .module('fusionSeedApp.components.document_jira')
    .directive('jiraIssue', jiraIssue);

  /* @ngInject */
  function jiraIssue() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'assets/components/document/document_jira/contentTypes/jiraIssue.html',
      scope: true,
      controller: Controller,
      controllerAs: 'vm',
      bindToController: {
        doc: '=',
        highlight: '='
      }
    };

    return directive;

  }


  function Controller(SignalsService) {
    'ngInject';
    var vm = this;

    activate();

    function activate() {
      vm.postSignal = SignalsService.postSignal;
      vm.doc = processDocument(vm.doc);
    }

    function processDocument(doc) {
      return doc;
    }
  }
})();
