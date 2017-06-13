const path = require('path')
/**
 * generator for fusejs
 */
module.exports = function (data) {
  let targetFile = path.join(this.dirTheme, 'static/data/fuse.json')
  let items = data.data.files.map((obj, idx) => {
    let tags = obj.tags || []
    tags = tags.map((obj1, idx1) => {
      return obj1.title
    })
    return {
      title: obj.title,
      desc: obj.desc,
      tags: tags,
      author: obj.author,
      route: obj.route
    }
  })
  let ret = {
    path: targetFile,
    data: JSON.stringify(items)
  }
  return ret
}
