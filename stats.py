# module for statistic calculations 

import pandas as pd
import os
from dotenv import load_dotenv

url = os.getenv('URL')
df = pd.read_csv(url)


print(df)

def player_score(name):
    
    sum = 0
    sum += baseScore(name) + adjScore(name)
    return sum


def baseScore(name):


    sum = 0


def adjScore(name):

    sum = 0



def get_player_stats(name):
    current = 
    
