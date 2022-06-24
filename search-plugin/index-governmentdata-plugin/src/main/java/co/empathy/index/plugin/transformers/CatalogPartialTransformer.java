package co.empathy.index.plugin.transformers;

import co.empathy.index.plugin.processor.catalog.CatalogProcessor;
import co.empathy.index.plugin.processor.catalog.CatalogStandardElementsProcessor;
import co.empathy.indexbuilder.Operation.JsonOperation;
import co.empathy.indexbuilder.Transformer;
import co.empathy.indexbuilder.config.BundleDescriptor;
import co.empathy.indexbuilder.operation.DeltaOperation.UpdateDocsOperation;
import co.empathy.indexbuilder.util.ErrorLogger;
import com.google.common.base.Preconditions;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CatalogPartialTransformer implements Transformer<JsonOperation> {

    private final BundleDescriptor bundleDescriptor;
    private List<CatalogProcessor> processors;

    public CatalogPartialTransformer(BundleDescriptor bundleDescriptor) {
        this.bundleDescriptor = Preconditions.checkNotNull(bundleDescriptor);
        processors = Arrays.asList(
            new CatalogStandardElementsProcessor()
        );
    }

    @Override
    public List<JsonOperation> transform(Map<String, Object> element, ErrorLogger errorLogger) {
        if (element == null || element.isEmpty()) {
            return Collections.emptyList();
        }

        Map<String, Object> result = processors.stream().<Map<String, Object>>reduce(
            new HashMap<>(),
            (doc, proc) -> proc.process(doc, element, errorLogger),
            (doc, doc1) -> doc1
        );

        return Collections.singletonList(createJsonOperation(result));
    }

    public JsonOperation createJsonOperation(Map<String, Object> result) {
        return new UpdateDocsOperation(Collections.singletonList(result), false);
    }

}
