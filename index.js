require = require('esm')(module /*, options*/)

// DEBUG: Show resolve paths.
const Module = require('module')
const oldResolveFilename = Module._resolveFilename
Module._resolveFilename = function(request, parent, isMain) {
  console.log({request, parent})
  try {
    let filename = oldResolveFilename.call(this, request, parent, isMain)
    return filename
  } catch (e) {
    throw e
  }
}

module.exports = require('./main.mjs')
