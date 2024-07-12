module.exports = {
  plugins: ['jsx-a11y'],
  rules: {
    'jsx-a11y/control-has-associated-label': [2, {
      labelAttributes: ['label'],
      controlComponents: [],
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video'
      ],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid'
      ],
      depth: 25
    }]
  },
  extends: [
    'semistandard',
    'plugin:jsx-a11y/strict'
  ]
};
