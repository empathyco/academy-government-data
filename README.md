# academy-government-data
Project in favor of transparency of the grants and concessions of the Government of Spain.

## Search service
The search service itself is provided by Empathy.co. After a little bit of tuning and automation, it allows deploying a complete indexing and search service by executing a single command.

### Prerrequisites
There are some things needed prior to the execution of the deployment script.
- A **docker** service running to create and compose the containers (this is, opening Docker desktop)
- *jq* command (*it might not be necessary*). It should be installed in your device to be able to execute all the script. It can be easily installed in case you don't have it with a homebrew manager such like **brew**, with the command `brew install jq`
- **python3**. It's essential to parse the data files.

### Search deployment
In order to deploy the search service, we only need to perform two steps:
1. Run Docker desktop to have a docker service running
2. Move to the **search-plugin** folder and execute `./pipelineDeployer.sh` using the terminal.

#### What does the script do?
Firstly, it parses the compressed tsv with the data to index (placed in */data-plugin/datos_limpios*) to a JSON in order to send it in the indexing request. Then it raises up two containers that are shared between the search plugin and the index plugin, These are the *elasticsearch* and the *cerebro* containers.
After that, all the containers of the index plugin are raised up, creating a functional indexin service that is going to receive an automated request with the previously parsed data in order to index it.
After the indexing is finished, the script turns down these containers of the index service (with the objective of not blowing up your computer :smiley:) and runs the containers of the search service, that will receive and manage the queries.