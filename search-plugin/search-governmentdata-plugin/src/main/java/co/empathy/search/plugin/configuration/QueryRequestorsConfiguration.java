package co.empathy.search.plugin.configuration;

import co.empathy.search.beans.BuiltInQueryRequestorsConfiguration;
import co.empathy.search.beans.CollectionResolverConfiguration;
import co.empathy.search.requestors.QueryRequestorFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * Configuration class to group all the {@link QueryRequestorFactory} bean definitions
 *
 * @author cristiang@empathy.co
 */
@Configuration
@Import({CollectionResolverConfiguration.class, BuiltInQueryRequestorsConfiguration.class})
public class QueryRequestorsConfiguration {


}