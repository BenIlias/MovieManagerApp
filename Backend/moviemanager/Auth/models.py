
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Table
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "Users"

    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=False, unique=True)
    firstname = Column(String(255), nullable=False, unique=False)
    lastname = Column(String(255), nullable=False, unique=True)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(255), nullable=False, unique=True)


 