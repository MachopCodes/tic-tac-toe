#Variable=Value sh curl-scripts/games/create.sh
API="https://tic-tac-toe-wdi.herokuapp.com"

curl -k  "${API}/games" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \

echo
