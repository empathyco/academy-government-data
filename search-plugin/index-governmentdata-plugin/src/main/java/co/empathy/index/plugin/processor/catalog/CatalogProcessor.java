package co.empathy.index.plugin.processor.catalog;

import co.empathy.indexbuilder.util.ErrorLogger;
import java.util.Map;

/**
 * Interface that allows to decorate a result to fulfill index requirements using it's feed information
 *
 * @author davida
 */
public interface CatalogProcessor {

    Map<String, Object> process(Map<String, Object> indexDocument, Map<String, Object> originalElement,
        ErrorLogger errorLogger);
}
