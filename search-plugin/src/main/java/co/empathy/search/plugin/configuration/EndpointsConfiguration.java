package co.empathy.search.plugin.configuration;

import co.empathy.search.endpoints.EndPointFactory;
import co.empathy.search.endpoints.factories.StandardFactory;
import co.empathy.search.requestors.QueryRequestorFactory;
import co.empathy.search.responsetransformers.impl.SimpleResponseTransformer;
import java.util.HashMap;
import java.util.Map;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * Configuration class to group all the {@link EndPointFactory} bean definitions
 *
 * @author cristiang@empathy.co
 * @see QueryRequestorsConfiguration
 */
@Configuration
@Import(QueryRequestorsConfiguration.class)
public class EndpointsConfiguration {

    private final Map<String, QueryRequestorFactory> queryRequestorFactories;

    /**
     * Initialize the configuration with its dependencies
     *
     * @param queryRequestorFactories a {@link Map} of {@link QueryRequestorFactory} that will be used to create the
     *                                endpoint beans
     * @implSpec the received {@link Map} is created by Spring, taking all the {@link QueryRequestorFactory} beans and
     * their names as keys
     */
    public EndpointsConfiguration(Map<String, QueryRequestorFactory> queryRequestorFactories) {
        this.queryRequestorFactories = queryRequestorFactories;
    }

    /**
     * It's THE ENDPOINT, it exposes all available responses (content, links, top terms, ...) The response is built
     * using a {@link SimpleResponseTransformer}
     */
    @Bean
    public EndPointFactory customEndPointFactory() {
        return new StandardFactory(new HashMap<>(queryRequestorFactories), new SimpleResponseTransformer());
    }

}