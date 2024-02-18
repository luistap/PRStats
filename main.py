# module for the discord bot
# initialize the bot and set commands as needed

import discord
from discord.ext import commands
from dotenv import load_dotenv
import stats
import os

load_dotenv()
token = os.getenv('TOKEN')

intents = discord.Intents.default()
intents.messages = True
intents.guilds = True
intents.message_content = True
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print('ready')

# command: !playerStats
@bot.command(name= 'playerStats', help='Displays stats for a specified player.')
async def player_stats(ctx, playerName: str):

    player_row = stats.get_row(playerName)
    if player_row is None:
        await ctx.send("name not found")
    else:
        await ctx.send(print(player_row))



# command: !odds
@bot.command(name='odds', help='Calculates and displays odds for a match.')
async def match_odds(ctx, matchInfo: str):
    await ctx.send("testing matchOdds")

bot.run(token)
