import qualified Haste
import qualified Haste.DOM as DOM

main = do
    Just ol <- DOM.elemById "data"
    addToList ol $ map (\x->[x]) ['p'..'v']

createListNode inhtml = do
    elm <- DOM.newElem "li"
    DOM.setProp elm "innerHTML" inhtml
    return (elm)

addToList parent contents = do
    nodes <- mapM createListNode contents
    mapM_ (flip DOM.addChild $ parent) nodes
