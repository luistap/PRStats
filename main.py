import discord
from discord.ext import commands
from dotenv import load_dotenv
import os

load_dotenv()
token = os.getenv('TOKEN')

bot = commands.Bot(command_prefix='!')
@bot.event
async def onReady():
    print('ready')

# command: !playerStats
@bot.command(name= 'playerStats', help='Displays stats for a specified player.')
async def playerStats(ctx, playerName : str)
    await ctx.send("testing playerStats")


@bot.command(name='odds', help='Calculates and displays odds for a match.')
async def matchOdds(ctx, matchInfo: str)
    await ctx.send("testing matchOdds")

bot.run(token)
