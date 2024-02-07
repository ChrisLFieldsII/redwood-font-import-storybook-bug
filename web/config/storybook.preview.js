import * as React from 'react'

import '@fontsource-variable/open-sans'
import '@fontsource-variable/spline-sans'

/** @type { import("@storybook/csf").GlobalTypes } */
export const globalTypes = {}
/**
 * An example, no-op storybook decorator. Use a function like this to create decorators.
 * @param { import("@storybook/addons").StoryFn} StoryFn
 * @param { import("@storybook/addons").StoryContext} context
 * @returns StoryFn, unmodified.
 */
const _exampleDecorator = (StoryFn, _context) => {
  return <StoryFn />
}

export const decorators = []
