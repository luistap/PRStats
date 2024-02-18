# module for statistic calculations 

import pandas as pd

url = 'https://docs.google.com/spreadsheets/d/1meumcUensHq5gURLb6WC5cksqkjta9fAtMTdeMuADwc/export?format=csv&gid=1382361133'
df = pd.read_csv(url)


print(df)


# extract player stats by row
def get_row(name):

    player_row = df[df['Uplay'].str.lower() == name.lower()]
    if not player_row.empty:
        player_stats = player_row.iloc[0].to_dict()
        return player_stats
    else: 
        print('name not found')
        return None
    
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
    
print(get_row('pckrnr'))