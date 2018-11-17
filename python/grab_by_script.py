# -*- coding:UTF-8 -*-
import requests
import json
from contextlib import closing
import sys
import time
import warnings
import threading


class download_pics(object):
    """docstring for ClassName"""

    def __init__(self):
        pass

    @staticmethod
    def download_url(file_url, file_path):
        file_path = 'e:\\jpg\\all\\' + file_path
        with closing(requests.get(file_url, stream=True, verify=False)) as response:
            chunk_size = 1024  # 单次请求最大值
            content_size = int(response.headers['content-length'])  # 内容体总大小
            data_count = 0
            with open(file_path, "wb") as file:
                for data in response.iter_content(chunk_size=chunk_size):
                    file.write(data)
                    data_count = data_count + len(data)
                    now_jd = (data_count / content_size) * 100
                    sys.stdout.write("\r " + file_path + "文件下载进度：{0:.2f}({1}/{2}) - {3}".format(now_jd,
                    sys.stdout.flush()
        time.sleep(1)
        print("图片: {0}下载完成".format(file_path))

    def start_download(self, ):
        pass


if __name__ == '__main__':
    # 忽略警告
    warnings.filterwarnings('ignore')

    target='https://unsplash.com/napi/photos'
    req=requests.get(url=target, verify=False)
    # print(req.text)
    html=json.loads(req.text)
    print("图片总数: ", len(html))

    tread_list=[]
    for i in range(len(html)):
        pic_download_url=html[i]['links']['download']
        print("开始下载第" + str(i) + "图片: ", pic_download_url)

        indexstr="photos/"
        pos=pic_download_url.index(indexstr) + len(indexstr)
        fileName=pic_download_url[pos: pos + 11]

        fileName=fileName + ".jpg"
        try:

            threadObj=threading.Thread(
                target=download_pics.download_url, args=(pic_download_url, fileName))
            tread_list.append(threadObj)

        except Exception as e:
            raise e
            print("Error: 无法启动程序 ")
    for thread in tread_list[:]:
        thread.setDaemon(True)
        thread.start()

    for thread in tread_list[:]:
        thread.join()
    print("所有图片下载完成")
