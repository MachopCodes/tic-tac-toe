#Variable=Value sh curl-scripts/games/show.sh
curl -k "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
--include \
--request GET \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \

echo