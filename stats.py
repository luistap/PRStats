# module for statistic calculations 

import pandas as pd

url = 'https://docs.google.com/spreadsheets/d/1meumcUensHq5gURLb6WC5cksqkjta9fAtMTdeMuADwc/export?format=csv&gid=1382361133'
df = pd.read_csv(url)

# known_msu ==> stores map / dict for all known players with map-specific underperformance
known_msu = {"border":['pckrnr']}

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
    sum += (1.25 * scaleRank(row.get('Peak Rank / KD'))) + (1.5 * tourney_kd(row.get('Tournament KD'))) + (2 * finals_app(row.get('Finals W/L'))) + (1.75 * winLoss(row.get('Total Map Record')))
    return sum

def winLoss(data : str):
    
    percentage = float(data.split()[-1].rstrip("%"))
    return percentage

def finals_app(data : str):

    total_apps = sum(int(x) for x in data.split("-"))
    return total_apps

def tourney_kd(data : str):

    actual_kd = data.split('(')[-1][:-1]
    kd = float(actual_kd)
    return kd

def scaleRank(info : str):

    info = info.split()
    rank = info[0].lower()
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
def adjScore(name : str, row : str):
    sum = 0
    return sum

def det_frauds():

    df_copy = df.copy()
    df_copy['ranked kd'] = df_copy['Peak Rank / KD'].apply(extract_kd)
    df_copy['Tournament KD'] = df_copy['Tournament KD'].astype(float)
    df_copy['diff'] = df_copy['ranked kd'] - df_copy['Tournament KD']
    frauds = df[df['KDDifference'] >= 0.3]
    
    # Assuming 'Name' is the column with player names
    fraud_names = frauds['Uplay'].tolist()
    return fraud_names

def extract_kd(data : str):

    kd_str = data.split('(')[-1].rstrip(')')
    # Convert the extracted KD ratio to a float
    kd_float = float(kd_str)
    return kd_float

def tourneyKD(data: str):
    
    return float(data)

def get_player_stats(name):

    current = 0