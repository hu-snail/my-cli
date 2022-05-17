/**
 * @description 创建模板相关工具函数
 * @author hu-snail 1217437592@qq.com
 */
 import ejs from "ejs";
 import fs from "fs";
 import path from "path";
 import { execa } from "execa";
 import { fileURLToPath } from "url";

 const __dirname = fileURLToPath(import.meta.url);
 
 /**
  * @description 解析ejs模板
  * @param {Object} config
  * @param {String} templatePath
  * @returns code
  */
 export function getCode(config, templatePath) {
   const template = fs.readFileSync(
     path.resolve(__dirname, `../../template/${templatePath}.ejs`)
   );
   const code = ejs.render(template.toString(), {
     ...config.middleware,
   });
   return code;
 }
 
 /**
  * @description 创建文件或者文件夹
  * @example 创建vue文件 new fileName -vue --file
  * @param {String} fileName 文件名称
  * @param {Object} option 指令项
  */
 export function createFile(fileName, option) {
   const options = Object.keys(option);
   if (!options.length && fileName) fs.mkdirSync(`./${fileName}`);
   options.map((type) => {
     if (type !== "file" && type !== "folder") newFile(fileName, option, type);
   });
 }
 
 /**
  * @description 安装插件
  * @param {String} pluginName 插件名称
  * @param {Object} option 指令项
  */
 export function installPlugin(pluginName, option) {
   const options = Object.keys(option);
   const isYarn = option.Yarn ? "add" : "i";
   const isSaveDev = option.saveDev ? "-D" : "-S";
   if (pluginName && !options.length) {
     execa(`npm i ${pluginName}`, {
       cwd: "./",
       stdio: [2, 2, 2],
       shell: true,
     });
   }
   options.map((type) => {
     if (type === "saveDev" || type === "save") false;
     else {
       const tool = type.toLowerCase();
       const installStr = `${tool} ${isYarn} ${pluginName} ${isSaveDev}`;
       execa(installStr, {
         cwd: "./",
         stdio: [2, 2, 2],
         shell: true,
       });
     }
   });
 }
 
 /**
  * @description 复制文件，比如图片/图标静态资源
  * @param {*} rootPath 根目录
  * @param {*} item 静态文件配置项
  */
 export function copyFile(rootPath, template, item) {
   const fromFileName = path.resolve(
     __dirname,
     `../../templates/${template}/${item}`
   );
   const toFileName = `${rootPath}/${item}`;
   console.log('fromFileName:'+ fromFileName + 'toFileName:' + toFileName )
   const rs = fs.createReadStream(fromFileName, {
     autoClose: true,
     encoding: "utf-8",
     highWaterMark: 64 * 1024 * 1024,
     flags: "r",
   });
   const ws = fs.createWriteStream(toFileName, {
     encoding: "utf-8",
     flags: "a",
     highWaterMark: 16 * 1024 * 1024,
     autoClose: true,
   });
   rs.on("data", (chunk) => {
     const wsFlag = ws.write(chunk, "utf-8");
     if (!wsFlag) {
       rs.pause();
     }
   });
   ws.on("drain", () => {
     // 继续读取
     rs.resume();
   });
 
   rs.on("end", () => {
     ws.end();
   });
 }
 
 function newFile(fileName, option, type) {
   const isFolder = option.folder ? true : false;
   const fileType = type.toLowerCase();
 
   if (isFolder) fs.mkdirSync(`./${fileName}`);
   else {
     fs.writeFileSync(`./${fileName}.${fileType}`, "vue");
   }
 }

 export function hasTemplate(template) {
    return ['vue', 'vue-ts', 'react', 'react-ts'].includes(template)
 }

 export function getSupportTs(template) {
    return ['vue-ts', 'react-ts'].includes(template)
 }

 let files = []
 let dirs = []
 export function getFiles(template, dir) {
  const templatePath = `./bin/templates/${template}/`
  const rootFiles = fs.readdirSync(templatePath, 'utf-8')
  rootFiles.map(item => {
    const stat = fs.lstatSync(templatePath + item)
    const isDir = stat.isDirectory()
    if (isDir) {
      const itemDir = `${template}/${item}/`.replace(/react\//g, '')
      dirs.push(itemDir)
      getFiles(`${template}/${item}`, itemDir)
    } else files.push((dir ? dir : '') + item)
  })
  return {files, dirs}
}