#!/bin/bash

source bash-json.sh

graphql_apis=(
    "protocol_analytics_subgraphs",
    "auction_analytics_subgraphs",
    "vesting_subgraphs",
)

json=$(cat ./constant/api_url.json)

for n in ${s[@]}; do
    url=$(json_get_value "$json" "$s")
    echo $n
done
