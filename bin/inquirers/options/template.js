/**
 * @description 创建项目类型选择
 * @author hu-snail 1217437592@qq.com
 */

 export const changeTemplate = () => {
    return {
      type: "list",
      name: "template",
      choices: [
        {
          name: "react",
        },
        {
          name: "vue",
        },
      ],
      message: "Select a framework",
    };
  };
  