
pic_download_url = 'https://unsplash.com/photos/CH-ZZW8cbac/download'
indexstr = "photos/"
pos = pic_download_url.index(indexstr) + len(indexstr)
fileName = pic_download_url[pos: pos + 11]

print(fileName)
