/**
 * @description 创建项目指令
 * @author hu-snail 1217437592@qq.com
 */

 import inquirer from "inquirer";
 import { changeTemplate } from "../../inquirers/options/index.js";
 import {Command} from "commander";
 import chalk from "chalk";
 export default (program, call) => {
   program
     .command("create")
     .argument("<build-method>", "build tools", validatBuildMethod)
     .argument("<app-name>", "app name", validatAppName)
     .description("create a new project powered by my-project-cli")
     .option("-t, --template <value>", "create a new project by template")
     .action(async (method, projectName, option) => {
       let item = {};
       // 如果用户没有输入 模板参数，则提供项目类型选择 react/vue
       if (!option.template) {
         item = await getFramework(option);
       } else item = option;
       call && call({ method, projectName, ...item });
     });
 };
 
 /**
  * @description 校验构建方式
  * @param {String} appName 项目名称
  * @returns appName
  */
 function validatBuildMethod(val) {
   if (val === "vite" || val === "webpack") return val;
   else
     throw new commander.InvalidArgumentError(
       chalk.red(
         `
         "<build-method>构建方式，可输入的值为：${chalk.green(
           "vite"
         )} 或 ${chalk.green("webpack")}!请重新输入`
       )
     );
 }
 
 /**
  * @description 校验项目名称
  * @param {String} appName 项目名称
  * @returns appName
  */
 function validatAppName(appName) {
   var reg = /^[a-zA-Z][-_a-zA-Z0-9]/;
   if (!reg.test(appName)) {
     throw new Command.InvalidOptionArgumentError(
       chalk.red(`
       <app-name>项目名称必须以字母开头且长度大于2，请重新输入！`)
     );
   }
   return appName;
 }
 
 async function getFramework() {
   let answer = await inquirer.prompt([changeTemplate()]);
   return answer;
 }
 