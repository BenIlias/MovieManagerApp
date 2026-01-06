import os
from os.path import splitext
from .models import models
from .config import get_config

config = get_config()

def get_files(path):
    try:
        files = sorted(os.listdir(path))
    except:
        raise Exception('Unable to read from the path')
    
    return files
        


def migrate_file(movie: models.Movie, adding: bool = True):
    base_current = config['imports'] if adding else config['movies']
    base_new = config['movies'] if adding else config['imports']

    path_current = f'{base_current}/{movie.filename}'
    path_new = f'{base_new}/{movie.filename}'


    os.rename(path_current, path_new)
