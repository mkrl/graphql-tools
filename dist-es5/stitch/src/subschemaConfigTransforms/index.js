import { computedDirectiveTransformer } from './computedDirectiveTransformer';
export { computedDirectiveTransformer } from './computedDirectiveTransformer';
export { isolateComputedFieldsTransformer } from './isolateComputedFieldsTransformer';
export { splitMergedTypeEntryPointsTransformer } from './splitMergedTypeEntryPointsTransformer';
export var defaultSubschemaConfigTransforms = [
    computedDirectiveTransformer('computed'),
];
