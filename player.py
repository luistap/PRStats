# class for storing individual player data
# ----> encapsulate ...

class Player:
    def __init__(self, row):
        self.name = row['name']
        self.ranked_kd = row['ranked_kd']
        self.tournament_kd = row['tournament_kd']
        self.win_loss_record = row['win_loss_record']
        self.finals_appearances = row['finals_appearances']
        self.rank = row['rank']

    # Example method to present player data
    def get_summary(self):
        return f"Player: {self.name}, Ranked K/D: {self.ranked_kd}, Tournament K/D: 
        {self.tournament_kd}, Win/Loss: {self.win_loss_record}, Finals: {self.finals_appearances}, Rank: {self.rank}"

    



