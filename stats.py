# module for statistic calculations

import pandas as pd

url = 'https://docs.google.com/spreadsheets/d/1meumcUensHq5gURLb6WC5cksqkjta9fAtMTdeMuADwc/export?format=csv&gid=1382361133'
df = pd.read_csv(url)


print(df)

def playerScore(name):
    
    
    sum = 0
    sum += baseScore(name) + adjScore(name)
    return sum


def baseScore(name):


    sum = 0


def adjScore(name):

    sum = 0



    
