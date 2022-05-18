/**
 * @description 生成react模板
 * @author hu-snail 1217437592@qq.com
 */

import fs from 'fs'
import mkdirp from "mkdirp";
import { getFiles, copyFile, getCode } from '../utils/index.js'
import { jsignoreFile } from './config.js'

export const createReact = (config, rootPath) => {
   // 创建项目
   mkdirp.sync(rootPath)
   const { template, supportTs } = config
   const reactTemplate = (template === 'react' || template === 'react-ts') ? 'react' : ''
   const { files, dirs } = getFiles(reactTemplate)
   // 创建文件夹
   dirs.map(item => {
    mkdirp.sync(`${rootPath}/${item}`)
   })

   files.map(item => {
    const isEjs = item.indexOf('.ejs') !== -1
    // 对模板文件进行操作
    if (isEjs) {
       const fileTyep = supportTs ? 'ts' : 'js'
       // 去掉ejs后缀
       const newItem = item.replace(/.ejs/g, '')
       // json后缀名不需要处理
       const isJson = newItem.indexOf('.json') !== -1
       // 替换后缀名
       const newFilePath = isJson ? newItem : newItem.replace(/js/g, fileTyep)
       // 写入相关模板文件
      fs.writeFileSync(
         `${rootPath}/${newFilePath}`,
         getCode(config, reactTemplate, item)
       )
    } else {
       // 如果不是ejs模板，直接复制文件 
       if (supportTs) copyFile(rootPath, reactTemplate, item)
       else {
         // 判断是否存在js需要忽略的文件，即存在ts文件
         const hasTsFile = jsignoreFile.includes(item)
         if (!hasTsFile) copyFile(rootPath, reactTemplate, item)
       }
    }
   })
    return ''
}

