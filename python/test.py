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
        req = requests.get(self.target)
        html = req.text
        div_bf = BeautifulSoup(html)
        div = div_bf.find_all('div', class__='listmain')

if __name__ == "__main__":
    print("1234")
