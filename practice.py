import requests

api_key = 'e138e476-9fdd-4b63-8a85-baaf2f2f1340'
word = 'potato'
url = f'https://www.dictionaryapi.com/api/v3/references/collegiate/json/{word}?key=e138e476-9fdd-4b63-8a85-baaf2f2f1340'

res = requests.get(url)

definitions = res.json()

for definition in definitions:
    print(definition)