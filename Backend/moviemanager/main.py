from fastapi import FastAPI, HTTPException, status, Depends
from typing import List

from .shemas import schemas
from .Core.database import engine, get_db
from sqlalchemy.orm import Session
from .models.models import Base
from .Core.config import get_config 
from .Core.util import get_files, migrate_file
from os.path import splitext
from .Movies import controller

Base.metadata.create_all(bind=engine)
app = FastAPI()



config = get_config()




@app.get('/import_movies', response_model=List[schemas.Movie])
def import_movies(db: Session = Depends(get_db)):
    try:
        movies = []
        files = get_files(config['imports'])
        if files is None:
            return {"message": "No new movies to import"} 
        for file in files:
            name, _ = splitext(file)
            movie_db = controller.add_movie(db, file, name)
            movies.append(movie_db)
        
    except Exception:
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, 
                            detail="Server configuration error: missing path")
    
    return movies


