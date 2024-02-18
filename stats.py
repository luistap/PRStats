# module for statistic calculations 

import pandas as pd
import os
from dotenv import load_dotenv

url = 'https://docs.google.com/spreadsheets/d/1meumcUensHq5gURLb6WC5cksqkjta9fAtMTdeMuADwc/export?format=csv&gid=1382361133'
df = pd.read_csv(url)


print(df)

# extract player stats by row
def get_row(name):
    sum = 0

def player_score(name):
    
    sum = 0
    sum += baseScore(name) + adjScore(name)
    return sum


def baseScore(name):


    sum = 0


def adjScore(name):

    sum = 0



def get_player_stats(name):
    current = 0
    
