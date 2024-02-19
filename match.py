# script for calculating match-related info
# and handle other operations

from team import Team

def find_team(name : str, teams_list):

    for team in teams_list:
        if team.get_name().lower() == name.lower():
            return team
    
    # team not found, return None
    return None


