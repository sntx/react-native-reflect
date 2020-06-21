import _ from "lodash";
import { getStretchIndex } from "./utils";
const processBreakpoint = (breakpoint, attrs) => {
    return _.mapValues(attrs, (attr) => {
        if (!_.isArray(attr))
            return attr;
        const stretchIndex = getStretchIndex(breakpoint, _.size(attr));
        if (_.isArray(attr))
            return attr[stretchIndex];
    });
};
/**
 * Returns true if at least one attr in attrs is an array
 */
const attrsAreArrays = (attrs) => !!_.find(attrs, (attr) => _.isArray(attr));
function processAttrs(breakpoints, attrs) {
    if (_.size(breakpoints) !== 4) {
        console.error("Theme breakpoints should be of length 4");
        return [];
    }
    // 1) all attrs are non-arrays
    if (!attrsAreArrays(attrs))
        return attrs;
    const processedAttrs = [];
    _.times(_.size(breakpoints) + 1, (breakpoint) => {
        // 2) some attrs are arrays, some can be non-arrays
        processedAttrs[breakpoint] = processBreakpoint(breakpoint, attrs);
    });
    return processedAttrs;
}
export default processAttrs;
