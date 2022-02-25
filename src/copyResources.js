
export function copyResources (sourceDoc, targetDoc) {
    Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
        try {
            if (styleSheet.cssRules) {
                const newStyleEl = sourceDoc.createElement('style');

                Array.from(styleSheet.cssRules).forEach(cssRule => {
                    newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
                });

                targetDoc.head.appendChild(newStyleEl);
            } else {
                const newLinkEl = sourceDoc.createElement('link');

                newLinkEl.rel = 'stylesheet';
                newLinkEl.href = styleSheet.href;
                targetDoc.head.appendChild(newLinkEl);
            }
        } catch (e) {}
    });
}
