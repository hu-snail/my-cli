#! /usr/bin/env node
/**
 * @description 脚手架入口文件
 * @author hu-snail 1217437592@qq.com
 */
 import fs, { mkdirSync } from "fs";
 import path from "path";

 import command from "./commands/index.js";

 let config = await command();
 console.log(config)