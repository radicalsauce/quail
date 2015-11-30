var ContainsReadableTextComponent = require('ContainsReadableTextComponent');
var Case = require('Case');
var AMustContainText = {
  run: function (test) {
    test.get('$scope').find('a').each(function () {
      var _case = Case({
        element: this
      });
      test.add(_case);

      if (!$(this).attr('href') ||
        $(this).css('display') === 'none') {
        _case.set({
          status: 'inapplicable'
        });
        return;
      }

      if (ContainsReadableTextComponent($(this), true)) {
        _case.set({
          status: 'passed'
        });
      }
      else {
        _case.set({
          status: 'failed'
        });
      }
    });
  },

  meta: {
    testability: 1,
    title: {
      en: 'Links should contain text',
      nl: 'Links moeten tekst bevatten'
    },
    description: {
      en: 'Because many users of screen-readers use links to navigate the page, providing links with no text (or with images that have empty \"alt\" attributes and no other readable text) hinders these users.',
      nl: 'Veel gebruikers van schermlezers gebruiken links om op de pagina te navigeren. Links zonder tekst (of met afbeeldingen die een leeg \"alt\"-attribuut hebben en geen andere leesbare tekst) hinderen deze gebruikers.'
    },
    guidelines: {
      wcag: {
        '1.1.1': {
          techniques: [
            'H30'
          ]
        },
        '2.4.4': {
          techniques: [
            'H30'
          ]
        },
        '2.4.9': {
          techniques: [
            'H30'
          ]
        },
        '4.1.2': {
          techniques: [
            'H91'
          ]
        }
      }
    },
    tags: [
      'link',
      'content'
    ]
  }
};
module.exports = AMustContainText;