#!/usr/bin/python

import os
import re

#file list in current directory
files = os.listdir('.')
#regex pattern to find jpg files
regex = r"(.*?)\.jpg"

jpg_files = []
webp_files = []

#list of jpg and webp pairs 
file_pairs = [[re.match(regex, file).string, re.sub(regex,r"\1.webp", file )] \
    for file in files if re.match(regex, file)]

commands = ['cwebp -q 80 ' + j +' -o ' + w for j, w in file_pairs]    

def converte(commands):
    for command in commands:
        print(command)
        os.system(command)

converte(commands)

