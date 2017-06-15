const path = require('path')
/**
 * generator for fusejs
 */
module.exports = function (data) {
  let configs = data.appConfigs.fuse
  if (configs === false) return false
  let targetFile = path.join(this.dirTheme, 'static/data/fuse.json')
  let items = data.data.files.map((obj, idx) => {
    let tags = obj.tags || []
    tags = tags.map((obj1, idx1) => {
      return obj1.title
    })
    let cover = obj.cover
    if (obj.wechat && obj.wechat.share_cover) {
      cover = obj.wechat.share_cover
    }
    return {
      title: obj.title,
      desc: obj.desc,
      tags: tags,
      author: obj.author,
      route: obj.route,
      type: obj.type,
      cover: cover,
      time: obj.timeFromNow
    }
  })
  let ret = {
    path: targetFile,
    data: JSON.stringify(items)
  }
  return ret
}
