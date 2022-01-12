import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from 'path';
import fs from 'fs';

// 自动获取侧边栏
  function readFileList(dir,filesList = [],isChild = false) {
    const pathDir = `./docs/${dir}`
  let files = fs.readdirSync(pathDir);
  files.forEach((item,index) => {
    const fullPath = path.join(pathDir,item);
    const stat = fs.statSync(fullPath);
    // 是否还有子目录
   const noList = ['docs/.vuepress','docs/.DS_Store','docs/en' ,'docs/zh']
   console.log(fullPath,noList.includes(fullPath))
    if(stat.isDirectory() && !noList.includes(fullPath)){
      const link = fullPath.replace(`docs`,'')
      filesList.push({
        text: path.basename(fullPath),
        link,
        children:[]
      })
      readFileList(path.join(dir,item), filesList,true)
    } else {
      // console.log(444,path.extname(fullPath))
      const name = path.extname(fullPath)
      // console.log(77,path.basename(fullPath))
      const noHome = path.basename(fullPath) != 'README.md'
      if(name == '.md' && noHome){
        const link = fullPath.replace(`docs`,'')
        const sidebar = {
          text: path.basename(fullPath, path.extname(fullPath)),
          link,
        }
        if(isChild){
        
          const len = filesList.length - 1;
          if(filesList[len].children){
            if(index == 0){
              filesList[len].link = link
            }
            filesList[len].children.push(sidebar)
          }
        } else {
          filesList.push(sidebar)
        }
      }
     
    }
  })

  return filesList;
}

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
  lang: 'en-US',
  title: 'Joyark docs',
  description: 'docs work',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  // 多语言
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'Joyark docs',
      // description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Joyark docs',
      // description: 'Vue 驱动的静态网站生成器',
    },
  },

    // 主题配置
  themeConfig: {
    displayAllHeaders:true,
    logo: '/images/logo.png',
  
    locales: {
      '/': {
        selectLanguageName: 'English',
        // navbar: [
        //   {
        //     text: 'About us',
        //     link: '/Terms/',
        //     children: [
        //       {
        //         text: 'Terms Of Service',
        //         link: '/Terms/TermsOfService.md', 
        //       },
        //       {
        //         text: 'Privacy Policy',
        //         link: '/Terms/PrivacyPolicy.md'
        //       }
        //   ],
        //   },
        // ],
      
        sidebar:readFileList('')
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        selectLanguageText:'选择语言',
        // navbar: [
        //   {
        //     text: '关于我们',
        //     link: '/zh/Terms/',
        //     children: [
        //       {
        //         text: '服务条款',
        //         link: '/zh/Terms/TermsOfService.md', 
        //       },
        //       {
        //         text: '隐私协议',
        //         link: '/zh/Terms/PrivacyPolicy.md'
        //       }
        //   ],
        //   },
        // ],
        sidebar:readFileList('zh/')
      },
    },
  },
})

