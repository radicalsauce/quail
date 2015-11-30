var Case = require('Case');
var HasEventListenerComponent = require('HasEventListenerComponent');
var SelectJumpMenu = {
  run: function (test) {
    var $scope = test.get('$scope');
    if ($scope.find('select').length === 0) {
      return;
    }

    $scope.find('select').each(function () {
      if ($(this).parent('form').find(':submit').length === 0 &&
          HasEventListenerComponent($(this), 'change')) {
        test.add(Case({
          element: this,
          status: 'failed'
        }));
      }
      else {
        test.add(Case({
          element: this,
          status: 'passed'
        }));
      }
    });
  },

  meta: {
    testability: 0.5,
    title: {
      en: 'Select jump menus should jump on button press, not on state change',
      nl: 'Select jump menu\'s moeten springen wanneer de knop wordt gebruikt, niet bij statusverandering'
    },
    description: {
      en: 'If you wish to use a \'Jump\' menu with a select item that then redirects users to another page, the jump should occur on the user pressing a button, rather than on the change event of that select element.',
      nl: 'Als je een \'Jump\'-menu wilt gebruiken met een select item dat gebruikers naar een andere pagina verwijst, moet de verwijzing plaatsvinden als de gebruiker een knop gebruikt en niet op het moment dat het select element verandert.'
    },
    guidelines: {
      wcag: {
        '3.2.2': {
          techniques: [
            'F37'
          ]
        },
        '3.2.5': {
          techniques: [
            'F9'
          ]
        }
      }
    },
    tags: [
      'form',
      'content'
    ]
  }
};
module.exports = SelectJumpMenu;