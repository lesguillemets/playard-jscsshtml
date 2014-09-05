import qualified Haste
import qualified Haste.DOM as DOM
import Data.List (nub)

digits = 5

main = do
    gen <- Haste.newSeed
    let
        answer = makeAnswer gen digits
    Haste.writeLog answer
    Haste.withElems ["input", "submit", "results"] (playmoo answer)

playmoo answer [inp, subm, results] = do
    Haste.onEvent subm Haste.OnClick $ const . const $ trial
    where
        trial = do
            inp' <- Haste.getValue inp
            case inp' of
                Just input -> (appendToTable results) $ tryWith answer $ removeInvalid input
                _ -> return ()

removeInvalid :: String -> String
removeInvalid = filter ((`elem` ['0'..'9']))

makeAnswer :: Haste.Seed -> Int -> String
makeAnswer seed n = concat . map show . take n . nub $ ((Haste.randomRs (0,9) seed) ::[Int])

tryWith:: String -> String -> (String,Int,Int)
tryWith ans inp = (inp,hits,balls)
    where
        hits = length . filter id $ zipWith (==) ans inp
        balls = (length . filter id $ map ((flip elem) ans) inp) - hits

appendToTable tableElem (inp,hits,balls) = do
    let text = (show hits) ++ "H" ++ (show balls) ++ "B"
    tr <- DOM.newElem "tr"
    query <- DOM.newElem "td"
    DOM.setProp query "innerHTML" inp
    result <- DOM.newElem "td"
    DOM.setProp result "innerHTML" text
    DOM.addChild query tr
    DOM.addChild result tr
    DOM.addChild tr tableElem

