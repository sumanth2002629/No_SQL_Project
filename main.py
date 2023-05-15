import json
import os
import csv


# script = open("pipeline.json")
# data = json.load(script)

# data["queries"] = ["SELECT * FROM mathches;"]

class Run:
    def __init__(self):
        self.script = open("pipeline.json")
        self.data = json.load(self.script) 

    def run_script(self):

        for load_path in self.data["loadData"]:
            os.system("hive -f "+ load_path)
        for query in self.data["queryData"]:
            os.system("hive -f " + query)

        for visualisation in self.data["visualiseData"]:
            reader = csv.reader(open(visualisation["location"], newline=''))

            x = []
            y = []

            for row in reader:
                x.append(row[0])
                y.append(row[1])
        return x,y
    
    def get_meta(self):
        kind = ""
        x_label = ""
        y_label = ""
        title = ""
        for visualisation in self.data["visualiseData"]:
            kind = visualisation["type"]
            x_label = visualisation("xlabel")
            y_label = visualisation("ylabel")
            title = visualisation("title")

        return kind,x_label,y_label,title
    
    def get_predef(self):
        paths = {"catches_2020":"/home/sumanth/Documents/sem6/NoSql/Project/query_ops/catches/2020/000000_0", "catches_2021":"/home/sumanth/Documents/sem6/NoSql/Project/query_ops/catches/2021/000000_0", "catches_2022":"/home/sumanth/Documents/sem6/NoSql/Project/query_ops/catches/2022/000000_0","orange_2020": "/home/sumanth/Documents/sem6/NoSql/Project/query_ops/orange/2020/000000_0", "orange_2021":"/home/sumanth/Documents/sem6/NoSql/Project/query_ops/orange/2021/000000_0", "orange_2022":"/home/sumanth/Documents/sem6/NoSql/Project/query_ops/orange/2022/000000_0", "purple_2020":"/home/sumanth/Documents/sem6/NoSql/Project/query_ops/purple/2020/000000_0", "purple_2021":"/home/sumanth/Documents/sem6/NoSql/Project/query_ops/purple/2021/000000_0", "purple_2022":"/home/sumanth/Documents/sem6/NoSql/Project/query_ops/purple/2022/000000_0"}
    
        data = {}

        for key in paths.keys():
            reader = csv.reader(open(paths[key], newline=''))


            x = []
            y = []

            for row in reader:
                x.append(row[0])
                y.append(row[1])

            dict = {}
            dict["x"] = x
            dict["y"] = y
            # dict["year"] = key[-4:]
            # dict["title"] = key[:-5]

            data[key] = dict

        return data
    
    def get_venues(self):
        data = {}

        reader = csv.reader(open("/home/sumanth/Documents/sem6/NoSql/Project/query_ops/op1/000000_0", newline=''))
        x = []
        y = []

        for row in reader:
            x.append(row[0])
            y.append(row[1])

        data["x"] = x
        data["y"] = y
        data["type"] = "scatter"

        return data
    
    def get_pom(self):
        data = {}

        reader = csv.reader(open("/home/sumanth/Documents/sem6/NoSql/Project/query_ops/pom/000000_0", newline=''))
        x = []
        y = []

        for row in reader:
            x.append(row[0])
            y.append(row[1])

        data["x"] = x
        data["y"] = y
        data["type"] = "scatter"

        return data
    
    def get_balls_faced(self):
        data = {}

        reader = csv.reader(open("/home/sumanth/Documents/sem6/NoSql/Project/query_ops/balls_faced/000000_0", newline=''))
        x = []
        y = []

        for row in reader:
            x.append(row[0])
            y.append(row[1])

        data["x"] = x
        data["y"] = y
        data["type"] = "scatter"

        return data
    
    def run_query(self, query, fields):
        comp_query = "\"INSERT OVERWRITE LOCAL DIRECTORY \'/home/sumanth/Documents/sem6/NoSql/Project/query_ops/temp\' ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' STORED AS TEXTFILE " + query + "\""

        data = 0
        if(fields == []):
            os.system("hive -e " + comp_query)
            reader = csv.reader(open("/home/sumanth/Documents/sem6/NoSql/Project/query_ops/temp/000000_0", newline=''))
            
            for row in reader:
                data = row[0]

            return data

        else:
            x_idx = fields[0]
            y_idx = fields[1]

            os.system("hive -e " + comp_query)

            reader = csv.reader(open("/home/sumanth/Documents/sem6/NoSql/Project/query_ops/temp/000000_0", newline=''))
            x = []
            y = []

            for row in reader:
                x.append(row[x_idx])
                y.append(row[y_idx])

            data = {}
            data["x"] = x
            data["y"] = y

        return data



    
if __name__=="__main__":
    rn = Run()
    # data = rn.run_query("SELECT sum(iswicket) FROM b2b GROUP BY bowler HAVING bowler = 'MS Dhoni';",[])
    # print(data)
    data = rn.run_query("SELECT city as city, count(id) as num_matches FROM matches GROUP BY city ORDER BY num_matches DESC LIMIT 5;",[0,1])
    # print(rn.run_script())
        



# for visualisation in data["visualiseData"]:
#     pass