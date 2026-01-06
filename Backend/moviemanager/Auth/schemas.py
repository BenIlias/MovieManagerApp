from pydantic import BaseModel, EmailStr
from typing import Union, Optional

class UserInCreate(BaseModel):
    firstname: str
    lastname: str
    email: EmailStr
    password: str

class UserOutput(UserInCreate):
    id: str
    firstname: str
    lastname: str
    email: EmailStr
  
class UserInUpdate(BaseModel):
    id: int
    firstname: Optional[str]
    lastname: Optional[str]
    email: Optional[str]
    password: Optional[str]

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserWithToken(BaseModel):
    token: str
    