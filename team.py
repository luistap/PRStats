import stats

class Team:

    def __init__(self, teamInfo : str):

        self.score = 0
        teamInfo = teamInfo.split()
        self.name = teamInfo[0]

        # tally up the players scores
        for name in teamInfo[1:]:
            self.score += stats.player_score(name)


    def get_name(self): return self.name

    def get_score(self): return self.score

team1 = Team("team1 pckrnr moonma.n Menu_spk r.isk millz_525")
team2 = Team("team2 Shotzz-TBC Palentier beefiddyeight ay.jay. Cwispey.")
print(team1.get_score())
print(team2.get_score())
