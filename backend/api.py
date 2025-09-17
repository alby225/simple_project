from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DETAILS_FILE = os.path.join(os.path.dirname(__file__), "details.json")

def read_details():
    with open(DETAILS_FILE, "r") as f:
        return json.load(f)

def write_details(details):
    with open(DETAILS_FILE, "w") as f:
        json.dump(details, f)

@app.get("/")
def home():
    return {"message": "Welcome to FastAPI"}

@app.get("/get_data/{id}")
def data_fetch(id: int):
    details = read_details()
    return details.get(str(id), "Not found")

@app.post("/add")
def add_name(id: int, name: str):
    details = read_details()
    details[str(id)] = name
    write_details(details)
    return {"message": "name added"}

@app.put("/edit/{id}/{name}")
def edit_name(id: int, name: str):
    details = read_details()
    details[str(id)] = name
    write_details(details)
    return {"message": "name edited"}

@app.delete("/delete/{id}")
def delete_name(id: int):
    details = read_details()
    details.pop(str(id), None)
    write_details(details)
    return {"message": "name deleted"}

'''if __name__=="__main__":
    import uvicorn
    uvicorn.run(app,host="0.0.0.0",port=8000)'''