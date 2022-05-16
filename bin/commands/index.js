import { program } from "commander";
import chalk from "chalk";
import { create, help } from "./options/index.js";

export default async (call) => {
  return new Promise((resolve, reject) => {
    program
      .name(chalk.blue("my-cli"))
      .usage("[global options] command");
    // 版本信息
    program.version("1.0.0");
    // 帮助信息
    program.option("-F, --framework", "surport vue,react");
    // 创建项目命令
    create(program, (item) => {
      resolve(item);
    });
    // 帮助信息
    help(program);
    // 解析指令
    program.parse(process.argv);
  });
};
