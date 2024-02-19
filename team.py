# class for storing team information

import stats

class Team:

    def __init__(self, teamInfo : str):

        self.score = 0
        teamInfo = teamInfo.split()
        self.name = teamInfo[0]
        del teamInfo[0]
        # tally up the players scores
        for name in teamInfo:
            self.score += stats.player_score(name)


    def get_name(self): return self.name

    def get_score(self): return self.score

    