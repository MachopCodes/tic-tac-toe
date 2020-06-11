#Variable=Value sh curl-scripts/games/destroy.sh
API="https://tic-tac-toe-wdi.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
