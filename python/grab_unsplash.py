from bs4 import BeautifulSoup
from contextlib import closing
import requests
import sys
import os


class downloader(object):
    """docstring for downloader"""

    def __init__(self):
        pass

    def download_url(self, file_url, file_path):
        with closing(requests.get(file_url, stream=True)) as response:
            chunk_size = 1024  # 单次请求最大值
            content_size = int(
                response.headers['content-length'])  # 内容体总大小
            data_count = 0
            with open(file_path, "wb") as file:
                for data in response.iter_content(chunk_size=chunk_size):
                    file.write(data)
                    data_count = data_count + len(data)
                    now_jd = (data_count / content_size) * 100
                    sys.stdout.write("\r 文件下载进度：{0:.2f}({1}/{2}) - {3}".format(now_jd,
                                                                               data_count, content_size, file_path))
                    sys.stdout.flush()


if __name__ == '__main__':

    server = 'https://unsplash.com'
    req = requests.get(server)
    div_bf = BeautifulSoup(req.text, features="html.parser")
    div = div_bf.find_all('div', class_='_1pn7R')
    num = 0
    for div in div[0:5]:
        a_bf = BeautifulSoup(str(div), features="html.parser")
        a = a_bf.find_all('a', class_='_2Mc8_')
        suffix = a[0].get('href')
        image_url = server + suffix
        small_image_req = requests.get(image_url)
        small_image_bf = BeautifulSoup(
            small_image_req.text, features="html.parser")
        a_download_url = small_image_bf.find_all('a', title='Download photo')
        image_true_url = a_download_url[0].get('href')
        print("\n===开始下载====", image_true_url)
        dl = downloader()
        dl.download_url(image_true_url, "D:\\jpg\\" + str(num) + ".jpg")
        num = num + 1

    # with open('2.jpg', 'wb') as f:
    #     f.write(image_bf.content)
