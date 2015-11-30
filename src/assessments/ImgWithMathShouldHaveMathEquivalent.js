var Case = require('Case');
var ImgWithMathShouldHaveMathEquivalent = {
  run: function (test) {
    test.get('$scope').find('img:not(img:has(math), img:has(tagName))').each(function () {
      var _case = Case({
        element: this
      });
      test.add(_case);
      if (!$(this).parent().find('math').length) {
        _case.set({
          status: 'failed'
        });
      }
    });
  },

  meta: {
    testability: 0,
    title: {
      en: 'Images which contain math equations should provide equivalent MathML',
      nl: 'Afbeeldingen met wiskundige vergelijking moeten een equivalent in MathML bieden'
    },
    description: {
      en: 'Images which contain math equations should be accompanied or link to a document with the equivalent equation marked up with <a href=\"http://www.w3.org/Math/\">MathML</a>.',
      nl: 'Afbeeldingen die wiskundige vergelijkingen bevatten moeten vergezeld zijn van of linken naar een document met daarin een equivalent van de vergelijking in <a href=\"http://www.w3.org/Math/\">MathML</a>.'
    },
    guidelines: [

    ],
    tags: [
      'image',
      'content'
    ]
  }
};
module.exports = ImgWithMathShouldHaveMathEquivalent;