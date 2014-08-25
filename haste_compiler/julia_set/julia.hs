import qualified Haste
import qualified Haste.Graphics.Canvas as Cnv
import Data.Complex

width = 500 :: Int
height = 500 :: Int
xmin = -5 :: Double
xmax = 5 :: Double
ymin = -5 :: Double
ymax = 5 :: Double
threshold = 100 :: Double
repetation = 500 :: Int

main = do
    Just canv <- Cnv.getCanvasById "canv"
    printJulia canv (juliaset width height xmin xmax ymin ymax(0:+0))

printJulia :: Cnv.Canvas -> [[Double]] -> IO()
printJulia canv juliadata = Cnv.render canv juliaPict
    where
        juliaPict = showArrayWithColor valToColor juliadata

showArrayWithColor :: (Double -> Cnv.Color) -> [[Double]] -> Cnv.Picture ()
showArrayWithColor colorfunc values =
        sequence_ [
                Cnv.color col grid | y <- [0..length values-1], x <- [0..length (head values) -1],
                let
                    val = values!!x!!y
                    [x',y'] = map fromIntegral [x,y]
                    grid = Cnv.fill $ Cnv.rect (x',y') (x'+1,y'+1)
                    col = colorfunc val
                ]

valToColor :: Double -> Cnv.Color
valToColor value = Cnv.RGB r g b
    where
        [r,g,b] = if value >= 0 then [100, floor (255*value/threshold), 255-g] else [0,0,0]

juliaset :: Int -> Int -> Double -> Double -> Double -> Double -> Complex Double -> [[Double]]
juliaset w h xmn xmx ymn ymx c =
    [ [juliaVal (x:+y) | x <- [xmn, xmn+dx..xmx]]
        | y <- [ymn, ymn+dy .. ymx] ]
    where
        dx = (xmx-xmn) / fromIntegral (w+1)
        dy = (ymx-ymn) / fromIntegral (h+1)
        juliaVal = juliaVal' (\z->z*z*z+c)

juliaVal' :: (Complex Double -> Complex Double) -> Complex Double -> Double
juliaVal' f z
    | diverges =  -1
    | otherwise = last abss
    where
        fns = take repetation $ iterate f z
        abss = map (realPart . abs) fns
        diverges = any (>threshold) abss
