/**
 * @description 帮助信息
 * @author hu-snail 1217437592@qq.com
 */
 import chalk from "chalk";

 export default (program) => {
   program.addHelpText(
     "after",
     `
       Run ${chalk.green(
         "my-cli <command> --help"
       )} for detailed usage of given command.`
   );
 };
 