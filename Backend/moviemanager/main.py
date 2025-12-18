from fastapi import FastAPI
from .database import engine
from .models import Base


Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get('/get_movies')
def get_movies():
    return 'movies fetched'



