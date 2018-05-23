const { isEmpty } = require('lodash')

exports.cloneProject = require('./cloneProject')
exports.updateConfigFile = require('./updateConfigFile')
exports.prepareDirectory = require('./prepareDirectory')
exports.configGit = require('./configGit')

exports.formatPackageName = v =>
  v.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '-')

exports.notEmpty = v => !isEmpty(v)