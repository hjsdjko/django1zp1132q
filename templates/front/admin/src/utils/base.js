const base = {
    get() {
        return {
            url : "http://localhost:8080/django1zp1132q/",
            name: "django1zp1132q",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Django框架学习资源推送系统"
        } 
    }
}
export default base
