import requests
from bs4 import BeautifulSoup
import sys


class downloader(object):
    """下载器"""

    def __init__(self):
        self.server = "https://www.biqukan.com"
        self.target = "https://www.biqukan.com/1_1094/"
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
        aAll = a[15:25]
        self.nums = len(aAll)
        for each in aAll:
            self.names.append(each.string)
            self.urls.append(self.server + each.get('href'))

    def get_content(self, target):
        req = requests.get(target)
        html = req.text
        div_bf = BeautifulSoup(html, features="html.parser")
        div = div_bf.find_all(id='content', class_='showtxt')
        content = div[0].text.replace('\xa0' * 8, '\n\n')
        return content

    def write(self, path, name, content):
        with open(path, 'a', encoding='utf-8') as f:
            f.write(name + '\n')
            f.writelines(content)
            f.write('\n\n')


if __name__ == "__main__":
    dl = downloader()
    # div = dl.get_download_url()
    dl.get_download_url()
    print("开始下载小说..........")
    for i in range(dl.nums):
        content = dl.get_content(dl.urls[i])
        dl.write("1.txt", dl.names[i], content)
        sys.stdout.write("下载: \r{0:.2f}".format(
            ((i + 1) / dl.nums) * 100) + "%")
    print("下载完成")
