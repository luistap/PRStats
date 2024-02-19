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
    row = get_row(name)
    sum += baseScore(name, row) + adjScore(name, row)
    return sum


def baseScore(name, row : dict):

    sum = 0
    sum += (1.25 * scaleRank(row.get('Peak Rank / KD'))) + (1.5 * tourney_kd(row.get('Tournament KD'))) + 
        
    
    return sum


def tourney_kd(data : str):
    actual_kd = data.split('(')[-1][:-1]
    kd = float(actual_kd)
    return kd

def scaleRank(info : str):

    rank = info.split(" ", 1).lower()
    if rank == 'champion':
        return 5
    elif rank == 'diamond':
        return 4
    elif rank == 'emerald':
        return 3
    elif rank == 'platinum':
        return 2
    else:
        return 1

# to be implemented later.
def adjScore(name):

    sum = 0
    return sum



def get_player_stats(name):
    current = 0
    
print(get_row('pckrnr'))