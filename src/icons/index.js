/**
 * 字体图标, 统一使用SVG Sprite矢量图标(http://www.iconfont.cn/）
 *
 * 使用:
 *  1. 在阿里矢量图标站创建一个项目, 并添加图标(这一步非必须, 创建方便项目图标管理)
 *  2-1. 添加icon, 选中新增的icon图标, 复制代码 -> 下载 -> SVG下载 -> 粘贴代码(重命名)
 *  2-2. 添加icons, 下载图标库对应[iconfont.js]文件, 替换项目[./iconfont.js]文件 ***********p.s. 此方法会在页面加载所有定义的svg，顾不推荐
 *  3. 组件模版中使用 [<svg-icon name="canyin"></svg-icon>]
 *
 * 注意:
 *  1. 通过2-2 添加icons, getNameList方法无法返回对应数据
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'
import './iconfont.js'

Vue.component('svg-icon', SvgIcon)

// require.context + requireAll 加载符合条件的所有svg
const svgFiles = require.context('./svg', true, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

const iconList = requireAll(svgFiles)

export default {
  // 获取图标icon-(*).svg名称列表, 例如[shouye, xitong, zhedie, ...]
  getNameList() {
    return iconList.map(item => item.default.id.split('-')[1])
  }
}
