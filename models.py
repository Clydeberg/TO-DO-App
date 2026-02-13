from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__="users"
    id=Column(Integer, primary_key=True, index=True)
    username=Column(String, unique=True, index=True)
    hashed_password=Column(String)

    tasks=relationship("Task",back_populates="owner", cascade="all, delete") #"Task" is written like this to avoid circular referece

class Task(Base):  #see above line for relationship with user
    __tablename__ = "tasks"
    id=Column(Integer, primary_key=True, index=True)
    title=Column(String, index=True)
    completed=Column(Boolean, default=False)
    owner_id=Column(Integer, ForeignKey("users.id"))

    owner = relationship("User",back_populates="tasks")