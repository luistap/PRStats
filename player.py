# class for storing individual player data
# ----> encapsulate players' individual stats in one object

class Player:

    playerData = {}
    # constructor for the player class
    # @param df row containing player data
    def __init__(self, data : dict):
        self.name = data.get('Uplay')
        self.tournament_kd = data.get('Tournament KD')
        self.win_loss_record = data.get('Total Map Record')
        self.finals_appearances = data.get('Finals W/L')
        self.rank = data.get('Peak Rank / KD')
        self.level = data.get('Level')
        self.playerData = data
        del self.playerData['Paid'] 
        del self.playerData['URL']
        del self.playerData['Uplay']

    # Example method to present player data
    def get_summary(self):
        summary = f"Name: {self.name}, Ranked: {self.rank}, Tournament K/D: {self.tournament_kd}, Tournament Win/Loss: {self.win_loss_record}, Finals W/L: {self.finals_appearances},  Level: {self.level}"
        return summary
    
    def get_name(self): return self.name
    
    def get_level(self): return self.level

    def get_finalsApp(self): return self.finals_appearances

    def get_rank(self): return self.rank

    def get_tournamentKD(self): return self.tournament_kd

    def get_WL(self): return self.win_loss_record

    def toString(self):
        summary = ""
        for key in self.playerData.keys():
            summary += f"{self.playerData[key]}\n"
        return summary
        
    



