import fs from 'fs'
import mkdirp from "mkdirp";
import { getFiles, copyFile } from '../utils/index.js'
export const createReact = (config, rootPath) => {
   // 创建项目
   mkdirp.sync(rootPath)
   const { template } = config
   const { files, dirs } = getFiles(template)
   // 创建文件夹
   dirs.map(item => {
    mkdirp.sync(`${rootPath}/${item}`)
   })

   files.map(item => {
    const isEjs = item.indexOf('.ejs') !== -1
    if (isEjs) {} else {
       // 如果不是ejs模板，直接复制文件 
       copyFile(rootPath, template, item)
    }
   })
    return ''
}

