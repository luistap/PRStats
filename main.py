# module for the discord bot
# initialize the bot and set commands as needed

import discord
from discord.ext import commands
from dotenv import load_dotenv
import stats
import os
import match
import player as pl
from team import Team

load_dotenv()
token = os.getenv('TOKEN')

intents = discord.Intents.default()
intents.messages = True
intents.guilds = True
intents.message_content = True
bot = commands.Bot(command_prefix='!', intents=intents)

# set containers
teams = []

@bot.event
async def on_ready():
    print('ready')

# command: !playerStats
@bot.command(name= 'player', help='Displays stats for a specified player.')
async def player_stats(ctx, playerName: str):

    player_row = stats.get_row(playerName)
    if player_row is None:
        await ctx.send("name not found")
    else:
        current_player = pl.Player(player_row)
        # we have the player object, embed
        embed = discord.Embed(title=current_player.get_name(), color=0x00ff00)
        embed.add_field(name="Level:", value=str(current_player.get_level()), inline=True)
        embed.add_field(name="Ranked Stats:", value=current_player.get_rank(), inline=True)
        embed.add_field(name="Tournament KD:", value=current_player.get_tournamentKD(), inline=False)
        embed.add_field(name="Tournament W/L:", value=current_player.get_WL(), inline=False)
        embed.add_field(name="Finals Record:", value=current_player.get_finalsApp(), inline=False)
        await ctx.send(embed=embed)


# command: !frauds
@bot.command(name='frauds', help='Determines who the current fraudulent players are.')
async def get_frauds(ctx):

    frauds = stats.det_frauds()
    names_str = ""
    vals_str = ""
    embed = discord.Embed(title="FRAUDULENT PLAYERS", color=0x00ff00)
    for name, diff in frauds.items():
        names_str += f"{name}\n"
        vals_str += f"{diff}\n"
    
    embed.add_field(name="Name:", value=names_str, inline=True)
    embed.add_field(name="KD Differential:", value=vals_str, inline=True)
    await ctx.send(embed=embed)




# command: !odds
@bot.command(name='odds', help='Calculates and displays odds for a match.')
async def match_odds(ctx, *, matchInfo: str):

    if len(teams) < 2:
        await ctx.send("Less than 2 teams in memory")
    else:
        team1Name, team2Name = matchInfo.split()
        team1 = find_team(team1Name)
        team2 = find_team(team2Name)
        odds = team1.get_score() - team2.get_score()
        await ctx.send(odds)

# command: !compare
@bot.command(name='compare', help='Compare two players.')
async def compare(ctx, *, names : str):
    
    name1, name2 = names.split()
    player1_row = stats.get_row(name1)
    player2_row = stats.get_row(name2)
    player1_str = pl.Player(player1_row).toString()
    player2_str = pl.Player(player2_row).toString()
    embed = discord.Embed(title="Player Comparison", color=0x00ff00)
    stat_names = ""
    for stat in player1_row.keys():
        stat_names += f"**{stat}**\n"
    embed.add_field(name=f"__{name1}__", value=player1_str, inline=True)
    embed.add_field(name=f"Stats", value=stat_names, inline=True)
    embed.add_field(name=f"__{name2}__", value=player2_str, inline=True)
    await ctx.send(embed=embed)

    
# command: !streamerinfo
@bot.command(name='streamerinfo', help='Provide information regarding streamer contract(s).')
async def streamer(ctx):

    await ctx.send("Want to become a streamer for the org?")



# command: !maketeam
@bot.command(name='maketeam', help='Registers a team for the current session.')
async def make_team(ctx,*, teamInfo: str):

    current_team = Team(teamInfo)
    teams.append(current_team)
    await ctx.send("created team")

def find_team(name: str):

    for team in teams:
        if team.get_name().lower() == name.lower():
            return team
    return None

bot.run(token)