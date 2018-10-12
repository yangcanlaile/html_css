function hello() {
    if (!Modernizr.canvas) {
        alert("不支持cavas!!");
    }

    if (!Modernizr.video) {
        alert("不支持video!!");
    }
     //本地存储
    if (!Modernizr.localstorage) {

        alert("不支持localStorage!");
    }
    //Web Worker
    if(!Modernizr.webworkers){

    	alert("不支持webWork!")
    }
    //本地
    if(!Modernizr.applicationcache) {
    	alert("不支持applicationcache!")
    }
       //地理位置 geolocation
    if(!Modernizr.geolocation) {
    	alert("不支持地理位置!")
    }
}


/*function suports_local_storage() {
    return ('localStorage' in window)

}*/