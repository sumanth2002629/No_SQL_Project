from flask import Flask,jsonify,request
import main
import json
import os
import csv
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)

rn = main.Run()

@app.route('/cards-predef',methods = ['GET'])
def run_pipeline():
    
    data = rn.get_predef()

    return jsonify(data)

@app.route('/get-venues',methods = ['GET'])
def get_venues():
    data = rn.get_venues()
    return jsonify(data)

@app.route('/get-balls-faced',methods = ['GET'])
def get_balls_faced():
    data = rn.get_balls_faced()
    return jsonify(data)

@app.route('/get-pom',methods = ['GET'])
def get_pom():
    data = rn.get_pom()
    return jsonify(data)

@app.route('/query', methods=['GET', 'POST'])
def exec_query():
    query = request.form.get("name")
    x = request.form.get("value1")
    y = request.form.get("value2")
    type = request.form.get("type")

    fields = [int(x), int(y)]

    data = rn.run_query(query, fields)

    data["type"] = type

    return jsonify(data)

@app.route('/radar', methods=['GET', 'POST'])
def radar():
    data = {}
    player1 = request.form.get("player1")
    player2 = request.form.get("player2")
    player3 = request.form.get("player3")

    q11 = f"SELECT sum(batsman_run) FROM b2b GROUP BY batter HAVING batter = '{player1}'" 
    q12 = f"SELECT count(wicket_kind) FROM b2b GROUP BY wicket_kind,fielders_involved HAVING wicket_kind='caught' and fielders_involved='{player1}'"
    q13 = f"SELECT sum(iswicket) FROM b2b GROUP BY bowler HAVING bowler = '{player1}'"

    q21 = f"SELECT sum(batsman_run) FROM b2b GROUP BY batter HAVING batter = '{player2}'" 
    q22 = f"SELECT count(wicket_kind) FROM b2b GROUP BY wicket_kind,fielders_involved HAVING wicket_kind='caught' and fielders_involved='{player2}'"
    q23 = f"SELECT sum(iswicket) FROM b2b GROUP BY bowler HAVING bowler = '{player2}'"
    
    q31 = f"SELECT sum(batsman_run) FROM b2b GROUP BY batter HAVING batter = '{player3}'" 
    q32 = f"SELECT count(wicket_kind) FROM b2b GROUP BY wicket_kind,fielders_involved HAVING wicket_kind='caught' and fielders_involved='{player3}'"
    q33 = f"SELECT sum(iswicket) FROM b2b GROUP BY bowler HAVING bowler = '{player3}'"

    p1 = {}
    p1["runs"] = rn.run_query(q11,[])
    p1["catches"] = rn.run_query(q12,[])
    p1["wickets"] = rn.run_query(q13,[])

    p2 = {}
    p2["runs"] = rn.run_query(q21,[])
    p2["catches"] = rn.run_query(q22,[])
    p2["wickets"] = rn.run_query(q23,[])

    p3 = {}
    p3["runs"] = rn.run_query(q31,[])
    p3["catches"] = rn.run_query(q32,[])
    p3["wickets"] = rn.run_query(q33,[])

    data[player1] = p1
    data[player2] = p2
    data[player3] = p3

    return jsonify(data)

if __name__=="__main__":
    app.run("localhost",6969)

