const path = require('path')
/**
 * basic generator for nust application
 */
module.exports = function (data) {
  let targetFile = path.join(this.dirTheme, 'static/data/fuse.json')
  let items = data.data.files.map((obj, idx) => {
    return {
      title: obj.title,
      desc: obj.desc,
      tags: obj.tags,
      author: obj.author
    }
  })
  let ret = {
    path: targetFile,
    data: JSON.stringify(items)
  }
  return ret
}
