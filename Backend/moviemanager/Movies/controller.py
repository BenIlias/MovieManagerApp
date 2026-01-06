from sqlalchemy.orm import Session
from typing import Optional, List
from . import models
def add_movie(
    db: Session,
    filename: str,
    name: str,
    studio_id: Optional[int] = None,
    series_id: Optional[int] = None,
    series_number: Optional[int] = None,
    processed: Optional[int] = None,
    actor_ids: Optional[List[int]] = None,
    category_ids: Optional[List[int]] = None,
    ):
    
    movie_db = models.Movie(
        filename = filename,
        name = name,
        series_id = series_id,
        series_number = series_number,
        studio_id = studio_id,
        processed = processed 
    )
    
    if actor_ids is not None:
        movie_db.actors = actor_ids
    if category_ids is not None:
        movie_db.categories = category_ids
    
    try:
        db.add(movie_db)
        db.commit()
        db.refresh(movie_db)
    except:
        db.rollback()
        return None
    
    return movie_db
    
    
    
    