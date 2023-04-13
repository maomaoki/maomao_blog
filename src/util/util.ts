// 动态改变src

type img_url = (s:string)=>string

// 转为 img 静态资源打包路径
export const img_src:img_url = (url)=>{
  const obj = new URL(url,import.meta.url)
  // console.log(obj.pathname);
  
  return obj.pathname
}

