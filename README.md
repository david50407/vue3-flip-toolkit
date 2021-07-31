# vue3-flip-toolkit

Vue 3 port of [flip-toolkit](https://github.com/aholachek/react-flip-toolkit).

## Examples

See examples in storybook or source of examples under `stories/`.

To launch storybook, run `npm run serve`.

## Different to `react-flip-toolkit`

* `<Flipper element="div">` becomes `<Flipper is="div">` to match `<component is="div">` syntax in Vue
* `<Flipped>` also wrappers `<slots />` while React don't, you can control wrapper element with `<Flipped is="div">`

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur, if you installed).

## TODOs

* Port more examples from `react-flip-toolkit`
