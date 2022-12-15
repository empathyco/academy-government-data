package co.empathy.index.plugin;

import co.empathy.indexbuilder.api.PluginConfiguration;
import com.google.common.collect.ImmutableSet;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PluginConfig {

    public static final String CLIENT_ID = "governmentdata";
    //TODO Fill feed ids and languages
    public static final ImmutableSet<String> FEEDS = ImmutableSet.of("catalog", "catalog-partial"); //Fill with feedIds
    public static final ImmutableSet<String> LANGUAGES = ImmutableSet.of("en"); //Fill with list of languages

    @Bean
    PluginConfiguration clientPluginConfiguration() {
        return new PluginConfiguration(CLIENT_ID, FEEDS, LANGUAGES);
    }
}
