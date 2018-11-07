import requests
from bs4 import BeautifulSoup
import sys


class downloader(object):
    """下载器"""

    def __init__(self):
        self.server = "http://www.biqukan.com"
        self.target = "http://www.biqukan.com/1_1094/"
        self.names = []
        self.urls = []
        self.nums = 0

    def get_download_url(self):
        req = requests.get(url=self.target)
        html = req.text
        div_bf = BeautifulSoup(html, features="html.parser")
        div = div_bf.find_all('div', class_='listmain')
        a_bf = BeautifulSoup(str(div[0]), features="html.parser")
        a = a_bf.find_all('a')
        self.nums = len(a[15:20])
        for each in a[15:20]:
            self.names.append(each.string)
            self.urls.append(self.server + each.get('href'))

    def get_content(self, target):
        req = requests.get(url=target)
        html = req.text
        bf = BeautifulSoup(html, features="html.parser")
        texts = bf.find_all('div', class_='showtxt')
        texts = texts[0].text.replace('\xa0' * 8, '\n\n')
        return texts

    def write(self, name, path, text):
        with open(path, 'a', encoding='utf-8') as f:
            f.write(name + '\n')
            f.writelines(text)
            f.write('\n\n')


if __name__ == "__main__":
    dl = downloader()
    dl.get_download_url()
    print('一年永恒 开始下载：')
    for i in range(dl.nums):
        dl.write(dl.names[i], "1.txt", dl.get_content(dl.urls[i]))
        percent = float(i / dl.nums) * 100
        sys.stdout.write("\r{0}{1}".format(
            "|", '%.2f%%' % (percent)))
        sys.stdout.flush()
    print("下载完成。。。。。。。")
