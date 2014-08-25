module Main where
import Haste

main = withElems ["inText", "outText"] reverserWords

reverserWords [infield, outfield] =
    onEvent infield OnKeyUp $ const update
    where
        update = do
            intext <- getValue infield
            case intext of
                Just intxt -> setProp outfield "innerHTML" (reverseWords intxt)
                _ -> return ()

reverseWords :: String -> String
reverseWords = unwords . map reverse . words
