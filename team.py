import stats

class Team:

    def __init__(self, teamInfo : str):

        self.score = 0
        teamInfo = teamInfo.split()
        self.name = teamInfo[0]
        index = 1

        # tally up the players scores
        for index in range(len(teamInfo)):
            self.score += stats.player_score(teamInfo[index])


    def get_name(self): return self.name

team1 = Team("team2 tekkers perron codor deadcows eric")
print(team1.get_name())
