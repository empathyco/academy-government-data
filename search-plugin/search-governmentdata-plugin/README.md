# governmentdata search plugin

## Deploying to an environment

### Test/Integration
On every commit to main or when `FORCE_DEPLOY_INTEGRATION` variable is set to true in Jenkinsfile, 
the plugin will be automatically deployed to S3 and reloaded in the integration (test) environment.

### Staging
On every tag pushed (only for commits in main), the plugin will be automatically
deployed to S3 and reloaded in the staging environment.

### Production
Deployment to S3 needs to be done manually. Plugin reload also needs to be done manually through EBAdmin.

## Request examples

### Basic catalog queries

* [http://localhost:8080/query/governmentdata/search?query=apple&lang=en](http://localhost:8080/query/governmentdata/search?query=apple&lang=en)


* [http://localhost:8080/query/governmentdata/search?query=orange&lang=en](http://localhost:8080/query/governmentdata/search?query=orange&lang=en)


* [http://localhost:8080/query/governmentdata/search?query=breakfast&lang=en](http://localhost:8080/query/governmentdata/search?query=breakfast&lang=en)


### Filter query

* [http://localhost:8080/query/governmentdata/search?query=breakfast&lang=en&filter=categoryIds:01&filter=price:*-10.0&filter=brand:Kellogg%27s](http://localhost:8080/query/governmentdata/search?query=breakfast&lang=en&filter=categoryIds:01&filter=price:*-10.0&filter=brand:Kellogg%27s)


### Banner and Direct link

* [http://localhost:8080/query/governmentdata/search?query=fruit&lang=en&scope=desktop](http://localhost:8080/query/governmentdata/search?query=fruit&lang=en&scope=desktop)


### Promoted link

* [http://localhost:8080/query/governmentdata/search?query=breakfast&lang=en&scope=desktop](http://localhost:8080/query/governmentdata/search?query=breakfast&lang=en&scope=desktop)


### Browse search

* [http://localhost:8080/query/governmentdata/browse?lang=en&browseField=facet_categoriesIds&browseValue=01](http://localhost:8080/query/governmentdata/browse?lang=en&browseField=facet_categoriesIds&browseValue=01)


### Empathize search

* [http://localhost:8080/query/governmentdata/empathize?lang=en](http://localhost:8080/query/governmentdata/empathize?lang=en)

* [http://localhost:8080/query/governmentdata/empathize?lang=en&query=apple](http://localhost:8080/query/governmentdata/empathize?lang=en&query=apple)


### Topclicked search

* [http://localhost:8080/query/governmentdata/topclicked?lang=en](http://localhost:8080/query/governmentdata/topclicked?lang=en)

### Field-values

* [http://localhost:8080/query/governmentdata/field-values?lang=en&attribute=categoryIds](http://localhost:8080/query/governmentdata/field-values?lang=en&attribute=categoryIds)
* [http://localhost:8080/query/governmentdata/field-values?lang=en&attribute=brand](http://localhost:8080/query/governmentdata/field-values?lang=en&attribute=brand)
