export const workType = [
  { value: 'Office', label: 'Office' },
  { value: 'Remote', label: 'Remote' },
];

export const descConfig = {
  toolbarButtons: {
    moreText: {
      buttons: [
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'fontFamily',
        'fontSize',
        'textColor',
        'backgroundColor',
        'inlineClass',
        'inlineStyle',
        'clearFormatting',
      ],
    },
    moreParagraph: {
      buttons: [
        'alignLeft',
        'alignCenter',
        'formatOLSimple',
        'alignRight',
        'alignJustify',
        'formatOL',
        'formatUL',
        'paragraphFormat',
        'paragraphStyle',
        'lineHeight',
        'outdent',
        'indent',
        'quote',
      ],
    },
    moreMisc: {
      buttons: ['undo', 'redo'],
      align: 'right',
      buttonsVisible: 2,
    },
  },
  fontFamilySelection: true,
  height: 150,
  placeholderText: 'Describe your vacancy shortly',
  charCounterCount: true,
  attribution: false,
};
