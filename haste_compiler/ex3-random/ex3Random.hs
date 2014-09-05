import qualified Haste as H
import qualified Haste.DOM as DOM

main = do
    seed <- H.newSeed
    H.withElems ["container"] (fillRandomNumbers seed 20)

fillRandomNumbers seed n [container] = do
    elm <- DOM.newElem "p"
    DOM.setProp elm "innerHTML" string
    DOM.addChild elm container
    return (elm)
        where
            numbers =  take n $ H.randomRs (0,9) seed :: [Int]
            string = concatMap (\x->(show x)++"\n") numbers
