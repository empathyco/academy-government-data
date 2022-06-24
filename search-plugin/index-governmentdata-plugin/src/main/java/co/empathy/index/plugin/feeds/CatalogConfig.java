package co.empathy.index.plugin.feeds;

import static co.empathy.index.plugin.PluginConfig.LANGUAGES;

import co.empathy.index.plugin.PluginConfig;
import co.empathy.index.plugin.transformers.CatalogTransformer;
import co.empathy.indexbuilder.ImportJob.OpType;
import co.empathy.indexbuilder.config.FeedConfiguration;
import co.empathy.indexbuilder.config.FeedConfiguration.Backend;
import co.empathy.indexbuilder.reader.JSONReader;
import co.empathy.indexbuilder.types.IndexType;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CatalogConfig {

    @Bean
    public FeedConfiguration feedConfiguration() {
        final FeedConfiguration feedConfiguration = new FeedConfiguration();
        feedConfiguration.setBackend(Backend.ELASTIC_7);
        feedConfiguration.setCustomer(PluginConfig.CLIENT_ID);
        feedConfiguration.setFeedId(IndexType.CATALOG.getFeedId());
        feedConfiguration.setIndexType(IndexType.CATALOG.getType());
        feedConfiguration.setLangs(LANGUAGES);
        feedConfiguration.setReader(new JSONReader());
        feedConfiguration.setOpType(OpType.FULL);
        feedConfiguration.setTransformerFactory(CatalogTransformer::new);
        return feedConfiguration;
    }
}
