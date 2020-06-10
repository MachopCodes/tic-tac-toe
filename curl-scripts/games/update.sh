API="https://tic-tac-toe-wdi.herokuapp.com"


curl -k  "https://tic-tac-toe-wdi.herokuapp.com/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell" : {
        "index": 0,
        "value": "x"
      },
      "over" : false
    }
  }'

echo
