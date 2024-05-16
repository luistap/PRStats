import psycopg2
from psycopg2 import OperationalError

def create_connection():
    try:
        conn = psycopg2.connect(
            dbname="packrunnerDB",
            user="packrunnerDB_owner",
            password="GXJyfgEB23nj",
            host="ep-hidden-king-a5h5vm2e.us-east-2.aws.neon.tech",
            sslmode="require"
        )
        print("Connection to the PostgreSQL database successful")
        return conn
    except OperationalError as e:
        print(f"The error '{e}' occurred")
        return None

def execute_query(connection, query):
    connection.autocommit = True
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print("Query executed successfully")
    except OperationalError as e:
        print(f"The error '{e}' occurred")

# Testing the connection
connection = create_connection()
if connection is not None:
    execute_query(connection, "SELECT NOW();")  # This will return the current date and time from the server
