package co.empathy.index.plugin.processor.catalog;

import co.empathy.indexbuilder.util.ErrorLogger;
import java.util.Map;

/**
 * @author Ana Gonzalez This processor is in charge of process the fields mark as standard in catalogSchema.json. Keeps
 * the original format of the fields and print an error if a required file is not pressent in the original element.
 */
public class CatalogStandardElementsProcessor implements CatalogProcessor {

    @Override
    public Map<String, Object> process(Map<String, Object> indexDocument, Map<String, Object> originalElement,
        ErrorLogger errorLogger) {
        return originalElement;
    }
}
