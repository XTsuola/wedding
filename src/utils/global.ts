  async function getImg(str: string, callback: (e: any) => void) {
    const url = (await import(str)).default
    // const url = new URL(str, import.meta.url)
}

export async function getImgList(strList: string[], callback: (e: any) => void) {
    let newList = []
    for(let i = 0;i<strList.length;i++) {
        newList.push((await import(strList[i])).default)
    }
    callback(newList)
}